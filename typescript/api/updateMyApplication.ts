import { PrivateApplicationResponse } from '../schema/PrivateApplicationResponse';
import { ApplicationFormPartial } from '../schema/ApplicationFormPartial';


export class UpdateMyApplicationRequest extends Request {
	method: 'PATCH';
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation: 'update_my_application';
}

declare module '../diskit.ts' {
  interface DiskitClient {
    request(request: UpdateMyApplicationRequest): Promise<PrivateApplicationResponse>
  }
}
	
export function updateMyApplication(body: ApplicationFormPartial): UpdateMyApplicationRequest {
	return new UpdateMyApplicationRequest(`https://discord.com/api/v10/applications/@me`, {
		body: JSON.stringify(body)
	});
}