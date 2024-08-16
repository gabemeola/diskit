import { TypedResponse } from '../response';
import { GetWebhookByTokenSchema } from '../schema/GetWebhookByTokenSchema';


export class GetWebhookByTokenRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_webhook_by_token' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetWebhookByTokenResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GetWebhookByTokenSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetWebhookByTokenRequest): Promise<GetWebhookByTokenResponse>
  }
}
	
export function getWebhookByToken(webhook_id: string, webhook_token: string): GetWebhookByTokenRequest {
	return new GetWebhookByTokenRequest(`https://discord.com/api/v10/webhooks/${webhook_id}/${webhook_token}`);
}