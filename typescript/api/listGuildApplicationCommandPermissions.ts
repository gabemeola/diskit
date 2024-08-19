import { TypedResponse } from '../response';
import { ListGuildApplicationCommandPermissionsSchema } from '../schema/ListGuildApplicationCommandPermissionsSchema';


export class ListGuildApplicationCommandPermissionsRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_guild_application_command_permissions' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListGuildApplicationCommandPermissionsResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ListGuildApplicationCommandPermissionsSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListGuildApplicationCommandPermissionsRequest): Promise<ListGuildApplicationCommandPermissionsResponse>
  }
}
	
export function listGuildApplicationCommandPermissions(application_id: string, guild_id: string): ListGuildApplicationCommandPermissionsRequest {
	return new ListGuildApplicationCommandPermissionsRequest(`https://discord.com/api/v10/applications/${application_id}/guilds/${guild_id}/commands/permissions`);
}