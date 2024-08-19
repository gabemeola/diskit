import { TypedResponse } from '../response';
import { ListMessageReactionsByEmojiSchema } from '../schema/ListMessageReactionsByEmojiSchema';


export class ListMessageReactionsByEmojiRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_message_reactions_by_emoji' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListMessageReactionsByEmojiResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ListMessageReactionsByEmojiSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListMessageReactionsByEmojiRequest): Promise<ListMessageReactionsByEmojiResponse>
  }
}
	
export function listMessageReactionsByEmoji(channel_id: string, message_id: string, emoji_name: string): ListMessageReactionsByEmojiRequest {
	return new ListMessageReactionsByEmojiRequest(`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`);
}