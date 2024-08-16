import { SnowflakeType } from './SnowflakeType';
import { TeamMembershipStates } from './TeamMembershipStates';
import { UserResponse } from './UserResponse';

export interface TeamMemberResponse {
    membership_state: TeamMembershipStates;
    team_id: SnowflakeType;
    user: UserResponse;
}
