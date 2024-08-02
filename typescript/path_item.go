package typescript

import (
	"fmt"
	"log"
	"strings"

	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
)

const rootUrl = "https://discord.com/api/v10"

func GenPathItem(pathUrl string, pathItem *v3.PathItem, resolve ResolveSchemaRef) (fileName string, content []byte) {
	op := pathItem.Get
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
		`export async function %s(): Promise<%s> {`,
		id,
		childSchemaName,
	)
	code += fmt.Sprintf(
		`
	const res = await fetch('%s');
	return await res.json();`,
		rootUrl + pathUrl)

	code += "\n}"

	return id + ".ts", []byte(imports + "\n" + code)
}
