import { TypedResponse } from '../response';
import { GuildHomeSettingsResponse } from '../schema/GuildHomeSettingsResponse';


export class GetGuildNewMemberWelcomeRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_new_member_welcome' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildNewMemberWelcomeResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildHomeSettingsResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildNewMemberWelcomeRequest): Promise<GetGuildNewMemberWelcomeResponse>
  }
}
	
export function getGuildNewMemberWelcome(guild_id: string): GetGuildNewMemberWelcomeRequest {
	return new GetGuildNewMemberWelcomeRequest(`https://discord.com/api/v10/guilds/${guild_id}/new-member-welcome`);
}