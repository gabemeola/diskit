import { TypedResponse } from '../response';
import { GuildPatchRequestPartial } from '../schema/GuildPatchRequestPartial';
import { GuildResponse } from '../schema/GuildResponse';


export class UpdateGuildRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildRequest): Promise<UpdateGuildResponse>
  }
}
	
export function updateGuild(guild_id: string, body: GuildPatchRequestPartial): UpdateGuildRequest {
	return new UpdateGuildRequest(`https://discord.com/api/v10/guilds/${guild_id}`, {
		body: JSON.stringify(body)
	});
}