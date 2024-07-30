package typescript

import (
	"fmt"
	"log"
	"strings"

	"github.com/gabemeola/diskit/ast"
	"github.com/pb33f/libopenapi/datamodel/high/base"
)

func GenFunction(f ast.Function) string {
	return fmt.Sprintf(`
	 function %s(): %s {
	 
	 }
`, f.Name, mapType(f.ReturnType))
}

func mapType(t ast.Type) string {
	switch t {
	case ast.TypeBool:
		return "bool"
	case ast.TypeString:
		return "string"
	case ast.TypeNumber:
		return "number"
	}
	log.Panicf("unexpected type (%d)", t)
	return ""
}

// Resolves a Schema Ref and returns back the canonical name
type ResolveSchemaRef = func(schema *base.SchemaProxy) string

func GenSchema(schema *base.SchemaProxy, resolve ResolveSchemaRef) (fileName string, content []byte) {
	refName := schema.GetReference()
	log.Printf("Generating: %s", refName)
	s := schema.Schema()
	schemaTypes := s.Type
	if len(schemaTypes) != 1 {
		log.Panicf("expected schema type (%s) to contain 1 item. Got: %+v", refName, schemaTypes)
	}
	schemaType := schemaTypes[0]
	fmt.Printf("TYPE: %+v\n", schemaType)
	schemaName := strings.Replace(refName, "#/components/schemas/", "", 1)
	fileName = schemaName + ".ts"

	switch schemaType {
	case "string":
		content = []byte(fmt.Sprintf("export type %s = string", schemaName))
	case "object":
		code := fmt.Sprintf("export type %s = {", schemaName)
		prop := s.Properties.OrderedMap.Newest()
		code += fmt.Sprintf("\n	%s: %s;", prop.Key, "string")
		// m := s.Properties.OrderedMap
		// println("PROPS:")
		// fmt.Printf("%+v\n", m)
		// fmt.Printf("ID (%s): %+v\n", m.Value("id").GetReference(), m.Value("id").Schema())
		// fmt.Printf("RESOLVED: %+v\n", resolve(m.Value("id")))
		// fmt.Printf("description (%s): %+v\n", m.Value("description").GetReference(), m.Value("description").Schema())
		code += "\n}"
		content = []byte(code)
		// fmt.Printf("GEN (%s): %s\n", fileName, code)
	}

	return
}
