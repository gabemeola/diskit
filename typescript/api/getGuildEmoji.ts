import { TypedResponse } from '../response';
import { EmojiResponse } from '../schema/EmojiResponse';


export class GetGuildEmojiRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_emoji' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildEmojiResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<EmojiResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildEmojiRequest): Promise<GetGuildEmojiResponse>
  }
}
	
export function getGuildEmoji(guild_id: string, emoji_id: string): GetGuildEmojiRequest {
	return new GetGuildEmojiRequest(`https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`);
}