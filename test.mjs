import openapiTS, { astToString, transformSchemaObject, transformSchema, transformSchemaObjectWithComposition } from "openapi-typescript";
import ts from "typescript";
import { schema } from './schema.mjs'


async function main() {
  // const ast = await openapiTS(schema)
  const ast = transformSchemaObject(schema.components.schemas.PrivateApplicationResponse, {
    ctx: {
      // transform(obj, opts) {
      //   console.log({ obj, opts })
      //   if ('$ref' in obj) {
      //     return ts.factory.createStringLiteral("TODO")
      //   }
      // },
      resolve(ref) {
        console.log('Resolve',ref)
      }
    }
  })
  const code = astToString(ast)
  console.log(code)

}

main().catch(err => { throw err })
