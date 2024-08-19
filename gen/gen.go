package gen

import (
	"fmt"
	"log"
	"strings"
	"sync"

	typescript "github.com/gabemeola/diskit/gen/typescript"
	"github.com/pb33f/libopenapi"
	"github.com/pb33f/libopenapi/datamodel/high/base"
	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
	"github.com/samber/lo"
)

type HandleFileEmit = func(name string, content []byte)

type GenOpts struct {
	OnAPIFileEmit    HandleFileEmit
	OnSchemaFileEmit HandleFileEmit
	// Only allow specific endpoints
	Allowlist []string
}

func GenFromDocument(file []byte, opts GenOpts) {
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

	// f := ast.Function{
	// 	Name:       "test",
	// 	Comment:    "Really Cool Test Function",
	// 	ReturnType: ast.TypeString,
	// 	Params:     []ast.FunctionParam{},
	// }

	// data := typescript.GenFunction(f)
	// err = os.WriteFile("tmp/test.ts", []byte(data), os.ModePerm)
	// invariantErr(err, "error writing file")

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

	resolveSchemaByName := func(op *v3.Operation, schemaName string) string {
		schema, ok := model.Model.Components.Schemas.Get(schemaName)
		if !ok {
			log.Panicf("Error resolving schema by name: %s", schemaName)
		}
		wg.Add(1)
		// log.Printf("Resolving %s", schemaName)
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
			// refName := schema.GetReference()
			refName := schema.string
			_, hasProcessed := processedSchemas[refName]
			// Skip if already processed
			if hasProcessed {
				wg.Done()
				continue
			}
			// log.Printf("Processing %s", refName)
			processedSchemas[refName] = struct{}{}
			// fileName, data := typescript.GenSchema(schema.string, schema.Operation, schema.SchemaProxy, resolveSchemaRef)
			go func() {
				fileName, data := typescript.GenSchema2(schema.string, schema.Operation, schema.SchemaProxy, resolveSchemaByName)
				opts.OnSchemaFileEmit(fileName, data)
				wg.Done()
			}()
		}

	}()

	// Gen API
	count := 0
	genPath := func(pathUrl string, path *v3.PathItem) {
		count++
		fmt.Printf("GENERATING PATH (%d): %s\n", count, pathUrl)
		// if count >= 100 {
		// 	break
		// }
		// PrettyPrint(path)
		results := typescript.GenPathItem(pathUrl, path, resolveSchemaRef)
		for _, res := range results {
			opts.OnAPIFileEmit(res.FileName, res.Content)
			// Clear memory to avoid the GC tax
			res.Content = []byte{}
			res.FileName = ""
		}
	}
	if opts.Allowlist != nil {
		// Gen allowlisted paths
		for _, pathUrl := range opts.Allowlist {
			path, ok := model.Model.Paths.PathItems.Get(pathUrl)
			if !ok {
				log.Panicf("unable to load path: %s", pathUrl)
			}
			genPath(pathUrl, path)
		}
	} else {
		// Gen all paths
		for pair := model.Model.Paths.PathItems.Oldest(); pair != nil; pair = pair.Next() {
			pathUrl := pair.Key
			path := pair.Value
			genPath(pathUrl, path)
		}
	}
	fmt.Printf("COUNT: %d\n", count)

	wg.Wait()
	close(schemaGenCh)
}

func invariantErr(err error, message string) {
	if err != nil {
		log.Panicf("%s: %s", message, err)
	}
}
