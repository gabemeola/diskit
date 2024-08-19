import { TypedResponse } from '../response';
import { ApplicationCommandResponse } from '../schema/ApplicationCommandResponse';
import { ApplicationCommandPatchRequestPartial } from '../schema/ApplicationCommandPatchRequestPartial';


export class UpdateGuildApplicationCommandRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_application_command' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildApplicationCommandResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ApplicationCommandResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildApplicationCommandRequest): Promise<UpdateGuildApplicationCommandResponse>
  }
}
	
export function updateGuildApplicationCommand(application_id: string, guild_id: string, command_id: string, body: ApplicationCommandPatchRequestPartial): UpdateGuildApplicationCommandRequest {
	return new UpdateGuildApplicationCommandRequest(`https://discord.com/api/v10/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, {
		body: JSON.stringify(body)
	});
}