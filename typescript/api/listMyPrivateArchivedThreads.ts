import { TypedResponse } from '../response';
import { ThreadsResponse } from '../schema/ThreadsResponse';


export class ListMyPrivateArchivedThreadsRequest extends Request {
	method = 'GET' as const;
  // Need to have some unique item on the class
	// otherwise Typescript will consider the some Request equal
	// since it is structural typing instead of nominal.
	// https://github.com/microsoft/TypeScript/issues/8168
	//
	// I could use a type alias to get around this but a class might be useful for other things.
	// Point for type alias is it is more lightweight on memory (but might not be a non-issue).
	operation = 'list_my_private_archived_threads' as const;
}

// TODO: Try creating the Response union in file instead of as a utility type.
// Could be clearer and more performant for typescript.
export type ListMyPrivateArchivedThreadsResponse = TypedResponse<{
	200: {
		ok: true,
		json(): Promise<ThreadsResponse>
	},
}>

declare module '../diskit' {
  interface DiskitClient {
    request(request: ListMyPrivateArchivedThreadsRequest): Promise<ListMyPrivateArchivedThreadsResponse>
  }
}
	
export function listMyPrivateArchivedThreads(channel_id: string): ListMyPrivateArchivedThreadsRequest {
	return new ListMyPrivateArchivedThreadsRequest(`https://discord.com/api/v10/channels/${channel_id}/users/@me/threads/archived/private`);
}