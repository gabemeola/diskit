import { TypedResponse } from '../response';
import { StageInstanceResponse } from '../schema/StageInstanceResponse';
import { UpdateStageInstanceSchema } from '../schema/UpdateStageInstanceSchema';


export class UpdateStageInstanceRequest extends Request {
	method = 'PATCH' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'update_stage_instance' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type UpdateStageInstanceResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<StageInstanceResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: UpdateStageInstanceRequest): Promise<UpdateStageInstanceResponse>
  }
}
	
export function updateStageInstance(channel_id: string, body: UpdateStageInstanceSchema): UpdateStageInstanceRequest {
	return new UpdateStageInstanceRequest(`https://discord.com/api/v10/stage-instances/${channel_id}`, {
		body: JSON.stringify(body)
	});
}