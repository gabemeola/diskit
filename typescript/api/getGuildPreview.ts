import { TypedResponse } from '../response';
import { GuildPreviewResponse } from '../schema/GuildPreviewResponse';


export class GetGuildPreviewRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_preview' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildPreviewResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildPreviewResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildPreviewRequest): Promise<GetGuildPreviewResponse>
  }
}
	
export function getGuildPreview(guild_id: string): GetGuildPreviewRequest {
	return new GetGuildPreviewRequest(`https://discord.com/api/v10/guilds/${guild_id}/preview`);
}