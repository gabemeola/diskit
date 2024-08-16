import { TypedResponse } from '../response';
import { UpdateWebhookSchema } from '../schema/UpdateWebhookSchema';
import { UpdateWebhookSchema } from '../schema/UpdateWebhookSchema';


export class UpdateWebhookRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_webhook' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateWebhookResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<UpdateWebhookSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateWebhookRequest): Promise<UpdateWebhookResponse>
  }
}
	
export function updateWebhook(webhook_id: string, body: UpdateWebhookSchema): UpdateWebhookRequest {
	return new UpdateWebhookRequest(`https://discord.com/api/v10/webhooks/${webhook_id}`, {
		body: JSON.stringify(body)
	});
}