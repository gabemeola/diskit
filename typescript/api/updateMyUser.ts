import { UserPIIResponse } from '../schema/UserPIIResponse';
import { BotAccountPatchRequest } from '../schema/BotAccountPatchRequest';


export class UpdateMyUserRequest extends Request {
	method: 'PATCH';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation: 'update_my_user';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: UpdateMyUserRequest): Promise<UserPIIResponse>
  }
}
	
export function updateMyUser(body: BotAccountPatchRequest): UpdateMyUserRequest {
	return new UpdateMyUserRequest(`https://discord.com/api/v10/users/@me`, {
		body: JSON.stringify(body)
	});
}