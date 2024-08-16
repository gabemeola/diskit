import { ThreadMemberResponse } from './ThreadMemberResponse';
import { ThreadResponse } from './ThreadResponse';

export interface ThreadsResponse {
    has_more?: boolean | null;
    members: ThreadMemberResponse[];
    threads: ThreadResponse[];
}