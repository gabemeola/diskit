import { TypedResponse } from '../response';
import { ApplicationCommandResponse } from '../schema/ApplicationCommandResponse';


export class GetGuildApplicationCommandRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_application_command' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildApplicationCommandResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ApplicationCommandResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildApplicationCommandRequest): Promise<GetGuildApplicationCommandResponse>
  }
}
	
export function getGuildApplicationCommand(application_id: string, guild_id: string, command_id: string): GetGuildApplicationCommandRequest {
	return new GetGuildApplicationCommandRequest(`https://discord.com/api/v10/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`);
}