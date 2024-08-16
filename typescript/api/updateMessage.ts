import { TypedResponse } from '../response';
import { MessageResponse } from '../schema/MessageResponse';
import { MessageEditRequestPartial } from '../schema/MessageEditRequestPartial';


export class UpdateMessageRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_message' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateMessageResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<MessageResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateMessageRequest): Promise<UpdateMessageResponse>
  }
}
	
export function updateMessage(channel_id: string, message_id: string, body: MessageEditRequestPartial): UpdateMessageRequest {
	return new UpdateMessageRequest(`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}`, {
		body: JSON.stringify(body)
	});
}