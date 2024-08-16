import { TypedResponse } from '../response';
import { ListGuildRolesSchema } from '../schema/ListGuildRolesSchema';


export class ListGuildRolesRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_guild_roles' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListGuildRolesResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ListGuildRolesSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListGuildRolesRequest): Promise<ListGuildRolesResponse>
  }
}
	
export function listGuildRoles(guild_id: string): ListGuildRolesRequest {
	return new ListGuildRolesRequest(`https://discord.com/api/v10/guilds/${guild_id}/roles`);
}