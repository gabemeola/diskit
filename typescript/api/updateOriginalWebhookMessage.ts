import { TypedResponse } from '../response';
import { IncomingWebhookUpdateRequestPartial } from '../schema/IncomingWebhookUpdateRequestPartial';
import { MessageResponse } from '../schema/MessageResponse';


export class UpdateOriginalWebhookMessageRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_original_webhook_message' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateOriginalWebhookMessageResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<MessageResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateOriginalWebhookMessageRequest): Promise<UpdateOriginalWebhookMessageResponse>
  }
}
	
export function updateOriginalWebhookMessage(webhook_id: string, webhook_token: string, body: IncomingWebhookUpdateRequestPartial): UpdateOriginalWebhookMessageRequest {
	return new UpdateOriginalWebhookMessageRequest(`https://discord.com/api/v10/webhooks/${webhook_id}/${webhook_token}/messages/@original`, {
		body: JSON.stringify(body)
	});
}