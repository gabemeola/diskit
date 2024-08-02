import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class get_applicationRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: get_applicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function get_application(application_id: string): get_applicationRequest {
	return new get_applicationRequest(`https://discord.com/api/v10/applications/${application_id}`, {
		method: 'GET',
	});
}