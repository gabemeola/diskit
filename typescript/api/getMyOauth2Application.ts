import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetMyOauth2ApplicationRequest extends Request {
	method: 'GET';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyOauth2ApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function getMyOauth2Application(): GetMyOauth2ApplicationRequest {
	return new GetMyOauth2ApplicationRequest(`https://discord.com/api/v10/oauth2/applications/@me`);
}