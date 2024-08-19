import { TypedResponse } from '../response';
import { ListGuildVoiceRegionsSchema } from '../schema/ListGuildVoiceRegionsSchema';


export class ListGuildVoiceRegionsRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_guild_voice_regions' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListGuildVoiceRegionsResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ListGuildVoiceRegionsSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListGuildVoiceRegionsRequest): Promise<ListGuildVoiceRegionsResponse>
  }
}
	
export function listGuildVoiceRegions(guild_id: string): ListGuildVoiceRegionsRequest {
	return new ListGuildVoiceRegionsRequest(`https://discord.com/api/v10/guilds/${guild_id}/regions`);
}