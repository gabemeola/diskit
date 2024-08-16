import { TypedResponse } from '../response';
import { UpdateGuildEmojiSchema } from '../schema/UpdateGuildEmojiSchema';
import { EmojiResponse } from '../schema/EmojiResponse';


export class UpdateGuildEmojiRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_emoji' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildEmojiResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<EmojiResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildEmojiRequest): Promise<UpdateGuildEmojiResponse>
  }
}
	
export function updateGuildEmoji(guild_id: string, emoji_id: string, body: UpdateGuildEmojiSchema): UpdateGuildEmojiRequest {
	return new UpdateGuildEmojiRequest(`https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`, {
		body: JSON.stringify(body)
	});
}