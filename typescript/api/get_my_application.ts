import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';


export class GetMyApplicationRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function get_my_application(): GetMyApplicationRequest {
	return new GetMyApplicationRequest(`https://discord.com/api/v10/applications/@me`, {
		method: 'GET',
	});
}