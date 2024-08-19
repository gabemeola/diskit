import { TypedResponse } from '../response';
import { StageInstanceResponse } from '../schema/StageInstanceResponse';


export class GetStageInstanceRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'get_stage_instance' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type GetStageInstanceResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<StageInstanceResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: GetStageInstanceRequest): Promise<GetStageInstanceResponse>
  }
}
	
export function getStageInstance(channel_id: string): GetStageInstanceRequest {
	return new GetStageInstanceRequest(`https://discord.com/api/v10/stage-instances/${channel_id}`);
}