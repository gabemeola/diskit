import { TypedResponse } from '../response';
import { UpdateChannelSchema } from '../schema/UpdateChannelSchema';


export class UpdateChannelRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_channel' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateChannelResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<UpdateChannelSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateChannelRequest): Promise<UpdateChannelResponse>
  }
}
	
export function updateChannel(channel_id: string, body: UpdateChannelSchema): UpdateChannelRequest {
	return new UpdateChannelRequest(`https://discord.com/api/v10/channels/${channel_id}`, {
		body: JSON.stringify(body)
	});
}