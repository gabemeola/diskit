import { TypedResponse } from '../response';
import { WidgetSettingsResponse } from '../schema/WidgetSettingsResponse';
import { UpdateGuildWidgetSettingsSchema } from '../schema/UpdateGuildWidgetSettingsSchema';


export class UpdateGuildWidgetSettingsRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_widget_settings' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildWidgetSettingsResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<WidgetSettingsResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildWidgetSettingsRequest): Promise<UpdateGuildWidgetSettingsResponse>
  }
}
	
export function updateGuildWidgetSettings(guild_id: string, body: UpdateGuildWidgetSettingsSchema): UpdateGuildWidgetSettingsRequest {
	return new UpdateGuildWidgetSettingsRequest(`https://discord.com/api/v10/guilds/${guild_id}/widget`, {
		body: JSON.stringify(body)
	});
}