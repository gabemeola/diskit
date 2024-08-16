import { TypedResponse } from '../response';
import { UpdateGuildMemberSchema } from '../schema/UpdateGuildMemberSchema';
import { GuildMemberResponse } from '../schema/GuildMemberResponse';


export class UpdateGuildMemberRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_member' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildMemberResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildMemberResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildMemberRequest): Promise<UpdateGuildMemberResponse>
  }
}
	
export function updateGuildMember(guild_id: string, user_id: string, body: UpdateGuildMemberSchema): UpdateGuildMemberRequest {
	return new UpdateGuildMemberRequest(`https://discord.com/api/v10/guilds/${guild_id}/members/${user_id}`, {
		body: JSON.stringify(body)
	});
}