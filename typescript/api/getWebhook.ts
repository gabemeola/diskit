import { TypedResponse } from '../response';
import { GetWebhookSchema } from '../schema/GetWebhookSchema';


export class GetWebhookRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_webhook' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetWebhookResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GetWebhookSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetWebhookRequest): Promise<GetWebhookResponse>
  }
}
	
export function getWebhook(webhook_id: string): GetWebhookRequest {
	return new GetWebhookRequest(`https://discord.com/api/v10/webhooks/${webhook_id}`);
}