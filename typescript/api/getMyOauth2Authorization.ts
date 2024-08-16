import { TypedResponse } from '../response';
import { OAuth2GetAuthorizationResponse } from '../schema/OAuth2GetAuthorizationResponse';


export class GetMyOauth2AuthorizationRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_my_oauth2_authorization' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetMyOauth2AuthorizationResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<OAuth2GetAuthorizationResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetMyOauth2AuthorizationRequest): Promise<GetMyOauth2AuthorizationResponse>
  }
}
	
export function getMyOauth2Authorization(): GetMyOauth2AuthorizationRequest {
	return new GetMyOauth2AuthorizationRequest(`https://discord.com/api/v10/oauth2/@me`);
}