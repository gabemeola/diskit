package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/gabemeola/diskit/ast"
	typescript "github.com/gabemeola/diskit/gen_typescript"
	"github.com/pb33f/libopenapi"
	"github.com/pb33f/libopenapi/datamodel/high/base"
	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
	"github.com/samber/lo"
)

var pathToGen = []string{
	// TODO: Needs to support `type` in response schema
	// "/users/@me/connections",
	// TODO: Support other ops outside of GET
	"/users/@me",
	"/oauth2/applications/@me",
	"/applications/@me",
	"/applications/{application_id}",
	"/applications/{application_id}/guilds/{guild_id}/commands",
	// TODO: Support 201 responses (and any other codes)
	// "/guilds",
}

func main() {
	start := time.Now()
	defer func() {
		duration := time.Since(start)
		log.Printf("Generated in %fs", duration.Seconds())
	}()
	file, err := os.ReadFile("openapi.json")
	invariantErr(err, "error reading file")

	doc, err := libopenapi.NewDocument(file)
	invariantErr(err, "error creating document")
	model, errs := doc.BuildV3Model()
	if len(errs) > 0 {
		for _, err := range errs {
			fmt.Printf("error: %e\n", err)
		}
		panic(
			fmt.Sprintf("cannot create v3 model from document: %d errors reported", len(errs)),
		)
	}

	paths := model.Model.Paths.PathItems.Len()
	schemas := model.Model.Components.Schemas.Len()

	// print the number of paths and schemas in the document
	fmt.Printf("There are %d paths and %d schemas in the document\n", paths, schemas)

	// pathUrl := "/oauth2/applications/@me"
	// path, ok := model.Model.Paths.PathItems.Get(pathUrl)
	// if !ok {
	// 	log.Panicf("unable to load path")
	// }
	// PrettyPrint(path)
	// refSchema := path.Get.Responses.FindResponseByCode(200).Content.First().Value().Schema
	// schemaRefName := refSchema.GetReference()
	// schema := refSchema.Schema()
	// fmt.Printf("%s: %+v\n", schemaRefName, schema)
	// initialSchemasToGen[schemaRefName] = refSchema

	// fmt.Printf("%+v\n", refSchema.GetReferenceOrigin())
	// schema = strings.Replace(schema, "#/components/schemas/", "", 1)
	// comp, ok := model.Model.Components.Schemas.Get(schema)
	// if !ok {
	// 	log.Panicf("unable to load schema: %s", schema)
	// }
	// n := comp.GetReference()
	// fmt.Printf("%+v\n", n)
	// b, _ := schema.Render()
	// println(string(b))
	// PrettyPrint(schema)

	f := ast.Function{
		Name:       "test",
		Comment:    "Really Cool Test Function",
		ReturnType: ast.TypeString,
		Params:     []ast.FunctionParam{},
	}

	data := typescript.GenFunction(f)
	err = os.WriteFile("tmp/test.ts", []byte(data), os.ModePerm)
	invariantErr(err, "error writing file")

	schemaGenCh := make(chan struct {
		string
		*v3.Operation
		*base.SchemaProxy
	}, 100)
	wg := sync.WaitGroup{}

	resolveSchemaRef := func(op *v3.Operation, schema *base.SchemaProxy) string {
		wg.Add(1)
		schemaName := schema.GetReference()
		if schemaName == "" {
			schemaName = lo.PascalCase(op.OperationId) + "Schema"
		} else {
			schemaName = strings.Replace(schemaName, "#/components/schemas/", "", 1)
		}
		// s := schema.Schema()
		// initialSchemasToGen[schemaRefName] = refSchema
		schemaGenCh <- struct {
			string
			*v3.Operation
			*base.SchemaProxy
		}{schemaName, op, schema}
		return schemaName
	}

	// Process new Schemas in Queue
	go func() {
		// for {
		// 	select {
		// 	case schema, ok := <-schemaGenCh:
		// 		// schema.string
		// 	}
		// }
		var processedSchemas = map[string]struct{}{}

		for schema := range schemaGenCh {
			refName := schema.GetReference()
			_, hasProcessed := processedSchemas[refName]
			// Skip if already processed
			if hasProcessed {
				wg.Done()
				continue
			}
			processedSchemas[refName] = struct{}{}
			fileName, data := typescript.GenSchema(schema.string, schema.Operation, schema.SchemaProxy, resolveSchemaRef)
			err = os.WriteFile(filepath.Join("typescript", "schema", fileName), data, os.ModePerm)
			if err != nil {
				log.Printf("error writing %s: %s", schema.GetReference(), err)
			}
			wg.Done()
		}

	}()

	// Gen API
	for _, pathUrl := range pathToGen {
		path, ok := model.Model.Paths.PathItems.Get(pathUrl)
		if !ok {
			log.Panicf("unable to load path")
		}
		fmt.Printf("GENERATING PATH: %s\n", pathUrl)
		// PrettyPrint(path)
		results := typescript.GenPathItem(pathUrl, path, resolveSchemaRef)
		for _, res := range results {
			err = os.WriteFile(filepath.Join("typescript", "api", res.FileName), res.Content, os.ModePerm)
			invariantErr(err, "error writing file for: "+pathUrl)
			// Clear memory
			res.Content = []byte{}
			res.FileName = ""
		}
	}

	wg.Wait()
	close(schemaGenCh)
}

func invariantErr(err error, message string) {
	if err != nil {
		log.Panicf("%s: %s", message, err)
	}
}
