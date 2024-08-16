import { TypedResponse } from '../response';
import { UpdateWebhookByTokenSchema } from '../schema/UpdateWebhookByTokenSchema';
import { UpdateWebhookByTokenSchema } from '../schema/UpdateWebhookByTokenSchema';


export class UpdateWebhookByTokenRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_webhook_by_token' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateWebhookByTokenResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<UpdateWebhookByTokenSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateWebhookByTokenRequest): Promise<UpdateWebhookByTokenResponse>
  }
}
	
export function updateWebhookByToken(webhook_id: string, webhook_token: string, body: UpdateWebhookByTokenSchema): UpdateWebhookByTokenRequest {
	return new UpdateWebhookByTokenRequest(`https://discord.com/api/v10/webhooks/${webhook_id}/${webhook_token}`, {
		body: JSON.stringify(body)
	});
}