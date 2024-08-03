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

}`,
		f.Name, mapType(f.ReturnType))
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
	log.Printf("Generating Schema: %s", refName)
	s := schema.Schema()
	schemaTypes := s.Type
	if len(schemaTypes) != 1 {
		log.Panicf("expected schema type (%s) to contain 1 item. Got: %+v", refName, schemaTypes)
	}
	schemaType := schemaTypes[0]
	// fmt.Printf("TYPE: %+v\n", schemaType)
	schemaName := strings.Replace(refName, "#/components/schemas/", "", 1)
	fileName = schemaName + ".ts"

	switch schemaType {
	case "string":
		content = []byte(fmt.Sprintf("export type %s = string & {}", schemaName))
	case "object":
		imports := ""
		// TODO: Change to interface. Better for TS perf
		code := fmt.Sprintf("export type %s = {", schemaName)
		for prop := s.Properties.OrderedMap.Oldest(); prop != nil; prop = prop.Next() {
			schemaProxy := prop.Value
			refName := schemaProxy.GetReference()
			isRef := refName != ""
			// Handle Ref Linking
			if isRef {
				childRefName := resolve(schemaProxy)
				childSchemaName := strings.Replace(childRefName, "#/components/schemas/", "", 1)
				imports += fmt.Sprintf("import { %s } from './%s';\n", childSchemaName, childSchemaName)
				code += fmt.Sprintf("\n	%s: %s;", prop.Key, childSchemaName)
				continue
			}
			schema := schemaProxy.Schema()
			if len(schema.Type) == 0 {
				// TODO: Skip "oneOf" for now
				continue
			}
			// fmt.Printf("[%s]: %+v\n", prop.Key, schema.Type)
			key := prop.Key
			valTSType := schemaToTSType(schemaProxy)
			if strings.Contains(valTSType, "null") {
				key += "?"
			}
			code += fmt.Sprintf("\n	%s: %s;", key, valTSType)
		}
		// m := s.Properties.OrderedMap
		// println("PROPS:")
		// fmt.Printf("%+v\n", m)
		// fmt.Printf("ID (%s): %+v\n", m.Value("id").GetReference(), m.Value("id").Schema())
		// fmt.Printf("RESOLVED: %+v\n", resolve(m.Value("id")))
		// fmt.Printf("description (%s): %+v\n", m.Value("description").GetReference(), m.Value("description").Schema())
		code += "\n}"
		content = []byte(imports + "\n" + code)
		// fmt.Printf("GEN (%s): %s\n", fileName, code)
	case "integer":
		content = []byte(fmt.Sprintf("export type %s = number & {}", schemaName))
	}

	return
}

func schemaToTSType(schema *base.SchemaProxy) string {
	s := schema.Schema()
	schemaTypes := s.Type
	tsTypes := make([]string, 0, len(schemaTypes))
	if len(schemaTypes) > 0 {
		for _, schemaType := range schemaTypes {
			switch schemaType {
			case "string":
				tsTypes = append(tsTypes, "string")
			case "null":
				tsTypes = append(tsTypes, "null")
			case "integer":
				tsTypes = append(tsTypes, "number")
			case "boolean":
				tsTypes = append(tsTypes, "boolean")
			case "array":
				tsTypes = append(tsTypes, "Array<unknown>")
			default:
				tsTypes = append(tsTypes, "unknown")
			}
		}
	}
	// if len(schemaTypes) != 1 {
	// 	log.Panicf("expected schema type (%s) to contain 1 item. Got: %+v", schema.GetReference(), schemaTypes)
	// }

	return strings.Join(tsTypes, " | ")
}
