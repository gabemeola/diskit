import { TypedResponse } from '../response';
import { GuildStickerResponse } from '../schema/GuildStickerResponse';
import { UpdateGuildStickerSchema } from '../schema/UpdateGuildStickerSchema';


export class UpdateGuildStickerRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_sticker' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildStickerResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildStickerResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildStickerRequest): Promise<UpdateGuildStickerResponse>
  }
}
	
export function updateGuildSticker(guild_id: string, sticker_id: string, body: UpdateGuildStickerSchema): UpdateGuildStickerRequest {
	return new UpdateGuildStickerRequest(`https://discord.com/api/v10/guilds/${guild_id}/stickers/${sticker_id}`, {
		body: JSON.stringify(body)
	});
}