import { TypedResponse } from '../response';
import { GetApplicationRoleConnectionsMetadataSchema } from '../schema/GetApplicationRoleConnectionsMetadataSchema';


export class GetApplicationRoleConnectionsMetadataRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_application_role_connections_metadata' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetApplicationRoleConnectionsMetadataResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GetApplicationRoleConnectionsMetadataSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetApplicationRoleConnectionsMetadataRequest): Promise<GetApplicationRoleConnectionsMetadataResponse>
  }
}
	
export function getApplicationRoleConnectionsMetadata(application_id: string): GetApplicationRoleConnectionsMetadataRequest {
	return new GetApplicationRoleConnectionsMetadataRequest(`https://discord.com/api/v10/applications/${application_id}/role-connections/metadata`);
}