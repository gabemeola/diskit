import { TypedResponse } from '../response';
import { GetGuildScheduledEventSchema } from '../schema/GetGuildScheduledEventSchema';


export class GetGuildScheduledEventRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_guild_scheduled_event' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetGuildScheduledEventResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GetGuildScheduledEventSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetGuildScheduledEventRequest): Promise<GetGuildScheduledEventResponse>
  }
}
	
export function getGuildScheduledEvent(guild_id: string, guild_scheduled_event_id: string): GetGuildScheduledEventRequest {
	return new GetGuildScheduledEventRequest(`https://discord.com/api/v10/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`);
}