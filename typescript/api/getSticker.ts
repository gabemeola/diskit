import { TypedResponse } from '../response';
import { GetStickerSchema } from '../schema/GetStickerSchema';


export class GetStickerRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_sticker' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetStickerResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GetStickerSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetStickerRequest): Promise<GetStickerResponse>
  }
}
	
export function getSticker(sticker_id: string): GetStickerRequest {
	return new GetStickerRequest(`https://discord.com/api/v10/stickers/${sticker_id}`);
}