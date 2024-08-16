import { TypedResponse } from '../response';
import { GuildBanResponse } from '../schema/GuildBanResponse';


export class GetGuildBanRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_ban' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildBanResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildBanResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildBanRequest): Promise<GetGuildBanResponse>
  }
}
	
export function getGuildBan(guild_id: string, user_id: string): GetGuildBanRequest {
	return new GetGuildBanRequest(`https://discord.com/api/v10/guilds/${guild_id}/bans/${user_id}`);
}