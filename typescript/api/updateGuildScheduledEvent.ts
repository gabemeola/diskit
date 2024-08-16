import { TypedResponse } from '../response';
import { UpdateGuildScheduledEventSchema } from '../schema/UpdateGuildScheduledEventSchema';
import { UpdateGuildScheduledEventSchema } from '../schema/UpdateGuildScheduledEventSchema';


export class UpdateGuildScheduledEventRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_scheduled_event' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildScheduledEventResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<UpdateGuildScheduledEventSchema>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildScheduledEventRequest): Promise<UpdateGuildScheduledEventResponse>
  }
}
	
export function updateGuildScheduledEvent(guild_id: string, guild_scheduled_event_id: string, body: UpdateGuildScheduledEventSchema): UpdateGuildScheduledEventRequest {
	return new UpdateGuildScheduledEventRequest(`https://discord.com/api/v10/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, {
		body: JSON.stringify(body)
	});
}