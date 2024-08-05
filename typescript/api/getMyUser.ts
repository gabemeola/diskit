import { TypedResponse } from '../response';
import { UserPIIResponse } from '../schema/UserPIIResponse';


export class GetMyUserRequest extends Request {
	method = 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_my_user';
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetMyUserResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<UserPIIResponse>
	},
}>

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: GetMyUserRequest): Promise<GetMyUserResponse>
  }
}
	
export function getMyUser(): GetMyUserRequest {
	return new GetMyUserRequest(`https://discord.com/api/v10/users/@me`);
}