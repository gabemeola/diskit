import { TypedResponse } from '../response';
import { ListGuildApplicationCommandsSchema } from '../schema/ListGuildApplicationCommandsSchema';


export class ListGuildApplicationCommandsRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_guild_application_commands' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListGuildApplicationCommandsResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ListGuildApplicationCommandsSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListGuildApplicationCommandsRequest): Promise<ListGuildApplicationCommandsResponse>
  }
}
	
export function listGuildApplicationCommands(application_id: string, guild_id: string): ListGuildApplicationCommandsRequest {
	return new ListGuildApplicationCommandsRequest(`https://discord.com/api/v10/applications/${application_id}/guilds/${guild_id}/commands`);
}