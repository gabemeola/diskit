import { TypedResponse } from '../response';
import { UpdateGuildRoleSchema } from '../schema/UpdateGuildRoleSchema';
import { GuildRoleResponse } from '../schema/GuildRoleResponse';


export class UpdateGuildRoleRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_role' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildRoleResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildRoleResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildRoleRequest): Promise<UpdateGuildRoleResponse>
  }
}
	
export function updateGuildRole(guild_id: string, role_id: string, body: UpdateGuildRoleSchema): UpdateGuildRoleRequest {
	return new UpdateGuildRoleRequest(`https://discord.com/api/v10/guilds/${guild_id}/roles/${role_id}`, {
		body: JSON.stringify(body)
	});
}