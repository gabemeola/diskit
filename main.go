package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"sync"

	"github.com/gabemeola/diskit/ast"
	typescript "github.com/gabemeola/diskit/gen_typescript"
	"github.com/pb33f/libopenapi"
	"github.com/pb33f/libopenapi/datamodel/high/base"
)

var initialSchemasToGen = map[string]*base.SchemaProxy{}

var pathToGen = []string{
	// TODO: Needs to support `type` in response schema
	// "/users/@me/connections",
	// TODO: Support other ops outside of GET
	"/users/@me",
	// "/oauth2/applications/@me",
	// "/applications/@me",
	// TODO: Support url params
	// "/applications/{application_id}",	
}

func main() {
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
		*base.SchemaProxy
	}, 100)
	wg := sync.WaitGroup{}

	resolveSchemaRef := func(schema *base.SchemaProxy) string {
		wg.Add(1)
		refName := schema.GetReference()
		// s := schema.Schema()
		// initialSchemasToGen[schemaRefName] = refSchema
		schemaGenCh <- struct {
			string
			*base.SchemaProxy
		}{refName, schema}
		return refName
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
			fileName, data := typescript.GenSchema(schema.SchemaProxy, resolveSchemaRef)
			err = os.WriteFile(filepath.Join("typescript", "schema", fileName), data, os.ModePerm)
			if err != nil {
				log.Printf("error writing %s: %s", schema.GetReference(), err)
			}
			wg.Done()
		}

	}()

	// Gen Initial Schemas
	for refName, schema := range initialSchemasToGen {
		wg.Add(1)
		schemaGenCh <- struct {
			string
			*base.SchemaProxy
		}{refName, schema}
	}

	// Gen API
	for _, pathUrl := range pathToGen {
		path, ok := model.Model.Paths.PathItems.Get(pathUrl)
		if !ok {
			log.Panicf("unable to load path")
		}
		fmt.Printf("GENERATING PATH: %s\n", pathUrl)
		PrettyPrint(path)
		fileName, content := typescript.GenPathItem(pathUrl, path, resolveSchemaRef)
		err = os.WriteFile(filepath.Join("typescript", "api", fileName), content, os.ModePerm)
		invariantErr(err, "error writing file for: "+pathUrl)
	}

	wg.Wait()
	close(schemaGenCh)
}

func invariantErr(err error, message string) {
	if err != nil {
		log.Panicf("%s: %s", message, err)
	}
}
