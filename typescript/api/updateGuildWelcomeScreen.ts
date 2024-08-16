import { TypedResponse } from '../response';
import { WelcomeScreenPatchRequestPartial } from '../schema/WelcomeScreenPatchRequestPartial';
import { GuildWelcomeScreenResponse } from '../schema/GuildWelcomeScreenResponse';


export class UpdateGuildWelcomeScreenRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_guild_welcome_screen' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateGuildWelcomeScreenResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<GuildWelcomeScreenResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateGuildWelcomeScreenRequest): Promise<UpdateGuildWelcomeScreenResponse>
  }
}
	
export function updateGuildWelcomeScreen(guild_id: string, body: WelcomeScreenPatchRequestPartial): UpdateGuildWelcomeScreenRequest {
	return new UpdateGuildWelcomeScreenRequest(`https://discord.com/api/v10/guilds/${guild_id}/welcome-screen`, {
		body: JSON.stringify(body)
	});
}