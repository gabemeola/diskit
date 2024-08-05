import { TypedResponse } from '../response';
import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetMyOauth2ApplicationRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_my_oauth2_application' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetMyOauth2ApplicationResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<PrivateApplicationResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetMyOauth2ApplicationRequest): Promise<GetMyOauth2ApplicationResponse>
  }
}
	
export function getMyOauth2Application(): GetMyOauth2ApplicationRequest {
	return new GetMyOauth2ApplicationRequest(`https://discord.com/api/v10/oauth2/applications/@me`);
}