package typescript

import (
	"fmt"
	"log"
	"regexp"
	"strings"

	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
)

const rootUrl = "https://discord.com/api/v10"

var urlArgsRegx = regexp.MustCompile("{(.+)}")

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
	// strings.
	foundUrlArgs := urlArgsRegx.FindAllString(pathUrl, -1)
	// fmt.Printf("FOUND: %+v\n", foundUrlArgs)
	params := []string{}
	if len(foundUrlArgs) > 0 {
		for _, param := range foundUrlArgs {
			param = strings.TrimPrefix(param, "{")
			param = strings.TrimSuffix(param, "}")
			params = append(params, param)
		}
	}
	paramsCode := ""
	for _, param := range params {
		paramsCode += fmt.Sprintf("%s: string", param)
	}

	imports := ""
	imports += fmt.Sprintf("import { %s } from '../schema/%s';\n", childSchemaName, childSchemaName)

	code := fmt.Sprintf(
		`export async function %s(%s): Promise<%s> {`,
		id,
		paramsCode,
		childSchemaName,
	)

	urlCode := rootUrl + pathUrl
	if len(params) > 0 {
		urlCode = strings.ReplaceAll(urlCode, "{", "${")
	}
	urlCode = "`" + urlCode + "`"
	// for _, param := range params {
	// url = strings.ReplaceAll(url, )
	// }

	code += fmt.Sprintf(
		`
	const res = await fetch(%s);
	return await res.json();`,
		urlCode)

	code += "\n}"

	return id + ".ts", []byte(imports + "\n" + code)
}
