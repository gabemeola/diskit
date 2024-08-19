import { TypedResponse } from '../response';
import { GuildTemplateResponse } from '../schema/GuildTemplateResponse';
import { UpdateGuildTemplateSchema } from '../schema/UpdateGuildTemplateSchema';


export class UpdateGuildTemplateRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_template' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildTemplateResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildTemplateResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildTemplateRequest): Promise<UpdateGuildTemplateResponse>
  }
}
	
export function updateGuildTemplate(guild_id: string, code: string, body: UpdateGuildTemplateSchema): UpdateGuildTemplateRequest {
	return new UpdateGuildTemplateRequest(`https://discord.com/api/v10/guilds/${guild_id}/templates/${code}`, {
		body: JSON.stringify(body)
	});
}