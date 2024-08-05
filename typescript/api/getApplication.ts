import { TypedResponse } from '../response';
import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetApplicationRequest extends Request {
	method = 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_application';
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetApplicationResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<PrivateApplicationResponse>
	},
}>

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetApplicationRequest): Promise<GetApplicationResponse>
  }
}
	
export function getApplication(application_id: string): GetApplicationRequest {
	return new GetApplicationRequest(`https://discord.com/api/v10/applications/${application_id}`);
}