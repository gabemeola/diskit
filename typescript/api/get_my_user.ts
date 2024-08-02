import { UserPIIResponse } from '../schema/UserPIIResponse';


export class get_my_userRequest extends Request {}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: get_my_userRequest): Promise<UserPIIResponse>
  }
}
	
export function get_my_user(): get_my_userRequest {
	return new get_my_userRequest(`https://discord.com/api/v10/users/@me`, {
		method: 'GET',
	});
}