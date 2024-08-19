import { TypedResponse } from '../response';
import { MessageResponse } from '../schema/MessageResponse';
import { IncomingWebhookUpdateRequestPartial } from '../schema/IncomingWebhookUpdateRequestPartial';


export class UpdateWebhookMessageRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_webhook_message' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateWebhookMessageResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<MessageResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateWebhookMessageRequest): Promise<UpdateWebhookMessageResponse>
  }
}
	
export function updateWebhookMessage(webhook_id: string, webhook_token: string, message_id: string, body: IncomingWebhookUpdateRequestPartial): UpdateWebhookMessageRequest {
	return new UpdateWebhookMessageRequest(`https://discord.com/api/v10/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, {
		body: JSON.stringify(body)
	});
}