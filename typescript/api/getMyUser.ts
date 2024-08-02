import { UserPIIResponse } from '../schema/UserPIIResponse';


export class GetMyUserRequest extends Request {
	method: 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	// I could use a type alias to get around this but a class might be useful for other things.
	operation: 'get_my_user';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyUserRequest): Promise<UserPIIResponse>
  }
}
	
export function getMyUser(): GetMyUserRequest {
	return new GetMyUserRequest(`https://discord.com/api/v10/users/@me`);
}