import { SnowflakeType } from './SnowflakeType';
import { TeamMemberResponse } from './TeamMemberResponse';

export type TeamResponse = {
    icon?: string | null;
    id: SnowflakeType;
    members: TeamMemberResponse[];
    name: string;
    owner_user_id: SnowflakeType;
}
