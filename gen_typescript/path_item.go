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

type PathItemResult struct {
	FileName string
	Content  []byte
}

func GenPathItem(pathUrl string, pathItem *v3.PathItem, resolve ResolveSchemaRef) []*PathItemResult {
	ops := pathItem.GetOperations()
	results := make([]*PathItemResult, 0, ops.Len())

	for pair := ops.Oldest(); pair != nil; pair = pair.Next() {
		key := pair.Key
		op := pair.Value

		switch key {
		case "get":
			results = append(results, GenGetRequest(pathUrl, op, resolve))
		case "patch":
			results = append(results, GenPatchRequest(pathUrl, op, resolve))
		// TODO: Support other CRUD operations
		default:
			log.Printf("Unsupported op `%s` for: %s", key, pathUrl)
		}
	}

	return results
}

func GenGetRequest(pathUrl string, op *v3.Operation, resolve ResolveSchemaRef) *PathItemResult {
	id := op.OperationId
	log.Printf("Generating OP: %s", id)
	code := GenOpRequestCode(pathUrl, op, resolve, "")

	fileName := lo.CamelCase(id) + ".ts"
	return &PathItemResult{
		FileName: fileName,
		Content:  code,
	}
}

func GenPatchRequest(pathUrl string, op *v3.Operation, resolve ResolveSchemaRef) *PathItemResult {
	id := op.OperationId
	log.Printf("Generating OP: %s", id)
	reqBody := op.RequestBody
	reqBodySchema := reqBody.Content.First().Value().Schema
	reqBodyRef := resolve(reqBodySchema)
	reqBodySchemaName := strings.Replace(reqBodyRef, "#/components/schemas/", "", 1)
	code := GenOpRequestCode(pathUrl, op, resolve, reqBodySchemaName)

	fileName := lo.CamelCase(id) + ".ts"
	return &PathItemResult{
		FileName: fileName,
		Content:  code,
	}
}

func GenOpRequestCode(
	pathUrl string,
	op *v3.Operation,
	resolve ResolveSchemaRef,
	reqBodySchemaName string,
) []byte {
	id := op.OperationId
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
	if reqBodySchemaName != "" {
		paramsCode += fmt.Sprintf("body: %s", reqBodySchemaName)
	}

	imports := ""
	imports += fmt.Sprintf("import { %s } from '../schema/%s';\n", childSchemaName, childSchemaName)
	if reqBodySchemaName != "" {
		imports += fmt.Sprintf("import { %s } from '../schema/%s';\n", reqBodySchemaName, reqBodySchemaName)
	}

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

	bodyCode := ""
	if reqBodySchemaName != "" {
		bodyCode = `, {
		body: JSON.stringify(body)
	}`
	}

	code += fmt.Sprintf(
		`
	return new %s(%s%s);`,
		reqClassName,
		urlCode,
		bodyCode,
	)

	code += "\n}"

	return []byte(imports + "\n" + declarationCode + "\n" + code)
}
