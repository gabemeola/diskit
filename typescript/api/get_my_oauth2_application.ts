import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetMyOauth2ApplicationRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyOauth2ApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function get_my_oauth2_application(): GetMyOauth2ApplicationRequest {
	return new GetMyOauth2ApplicationRequest(`https://discord.com/api/v10/oauth2/applications/@me`, {
		method: 'GET',
	});
}