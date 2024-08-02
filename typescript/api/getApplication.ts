import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetApplicationRequest extends Request {
	method: 'GET';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function getApplication(application_id: string): GetApplicationRequest {
	return new GetApplicationRequest(`https://discord.com/api/v10/applications/${application_id}`);
}