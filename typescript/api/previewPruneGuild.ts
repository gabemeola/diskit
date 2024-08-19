import { TypedResponse } from '../response';
import { GuildPruneResponse } from '../schema/GuildPruneResponse';


export class PreviewPruneGuildRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'preview_prune_guild' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type PreviewPruneGuildResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildPruneResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: PreviewPruneGuildRequest): Promise<PreviewPruneGuildResponse>
  }
}
	
export function previewPruneGuild(guild_id: string): PreviewPruneGuildRequest {
	return new PreviewPruneGuildRequest(`https://discord.com/api/v10/guilds/${guild_id}/prune`);
}