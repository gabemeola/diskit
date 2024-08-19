import { TypedResponse } from '../response';
import { PrivateGuildMemberResponse } from '../schema/PrivateGuildMemberResponse';


export class GetMyGuildMemberRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_my_guild_member' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetMyGuildMemberResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<PrivateGuildMemberResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetMyGuildMemberRequest): Promise<GetMyGuildMemberResponse>
  }
}
	
export function getMyGuildMember(guild_id: string): GetMyGuildMemberRequest {
	return new GetMyGuildMemberRequest(`https://discord.com/api/v10/users/@me/guilds/${guild_id}/member`);
}