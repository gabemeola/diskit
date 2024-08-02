import { UserPIIResponse } from '../schema/UserPIIResponse';


export class GetMyUserRequest extends Request {
	method: 'GET';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyUserRequest): Promise<UserPIIResponse>
  }
}
	
export function getMyUser(): GetMyUserRequest {
	return new GetMyUserRequest(`https://discord.com/api/v10/users/@me`);
}