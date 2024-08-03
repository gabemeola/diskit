import { ListGuildApplicationCommandsSchema } from '../schema/ListGuildApplicationCommandsSchema';


export class ListGuildApplicationCommandsRequest extends Request {
	method: 'GET';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation: 'list_guild_application_commands';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: ListGuildApplicationCommandsRequest): Promise<ListGuildApplicationCommandsSchema>
  }
}
	
export function listGuildApplicationCommands(application_id: string, guild_id: string): ListGuildApplicationCommandsRequest {
	return new ListGuildApplicationCommandsRequest(`https://discord.com/api/v10/applications/${application_id}/guilds/${guild_id}/commands`);
}