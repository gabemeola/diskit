import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetMyOauth2ApplicationRequest extends Request {
	method: 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	// I could use a type alias to get around this but a class might be useful for other things.
	operation: 'get_my_oauth2_application';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyOauth2ApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function getMyOauth2Application(): GetMyOauth2ApplicationRequest {
	return new GetMyOauth2ApplicationRequest(`https://discord.com/api/v10/oauth2/applications/@me`);
}