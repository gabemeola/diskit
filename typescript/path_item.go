package typescript

import (
	"fmt"
	"log"
	"strings"

	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
)

func GenPathItem(path *v3.PathItem, resolve ResolveSchemaRef) (fileName string, content []byte) {
	op := path.Get
	if op == nil {
		// TODO: Support other CRUD operations
		return
	}
	id := op.OperationId
	log.Printf("Generating API: %s", id)
	resSchema := op.Responses.FindResponseByCode(200).Content.First().Value().Schema
	childRefName := resolve(resSchema)
	childSchemaName := strings.Replace(childRefName, "#/components/schemas/", "", 1)

	imports := ""
	imports += fmt.Sprintf("import { %s } from '../schema/%s';\n", childSchemaName, childSchemaName)

	code := fmt.Sprintf(
		`export function %s(): %s {`,
		id,
		childSchemaName,
	)
	code += "\n}"

	return id + ".ts", []byte(imports + "\n" + code)
}
