import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class get_my_oauth2_applicationRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: get_my_oauth2_applicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function get_my_oauth2_application(): get_my_oauth2_applicationRequest {
	return new get_my_oauth2_applicationRequest(`https://discord.com/api/v10/oauth2/applications/@me`, {
		method: 'GET',
	});
}