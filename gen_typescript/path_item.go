package typescript

import (
	"fmt"
	"log"
	"regexp"
	"strings"

	v3 "github.com/pb33f/libopenapi/datamodel/high/v3"
	"github.com/samber/lo"
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
	id = lo.CamelCase(id)
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

	reqClassName := lo.PascalCase(id + "Request")
	declarationCode := fmt.Sprintf(`
export class %s extends Request {
	method: 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation: '%s';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: %s): Promise<%s>
  }
}
	`,
		reqClassName,
		op.OperationId,
		reqClassName,
		childSchemaName,
	)

	code := fmt.Sprintf(
		`export function %s(%s): %s {`,
		id,
		paramsCode,
		reqClassName,
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
	return new %s(%s);`,
		reqClassName,
		urlCode)

	code += "\n}"

	fileName = id + ".ts"
	return fileName, []byte(imports + "\n" + declarationCode + "\n" + code)
}
