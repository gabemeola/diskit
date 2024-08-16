import { SnowflakeType } from './SnowflakeType';
import { TeamMemberResponse } from './TeamMemberResponse';

export interface TeamResponse {
    icon?: string | null;
    id: SnowflakeType;
    members: TeamMemberResponse[];
    name: string;
    owner_user_id: SnowflakeType;
}
