import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class get_my_applicationRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: get_my_applicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function get_my_application(): get_my_applicationRequest {
	return new get_my_applicationRequest(`https://discord.com/api/v10/applications/@me`, {
		method: 'GET',
	});
}