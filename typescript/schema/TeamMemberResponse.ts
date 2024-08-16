import { TeamMembershipStates } from './TeamMembershipStates';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export type TeamMemberResponse = {
    membership_state: TeamMembershipStates;
    team_id: SnowflakeType;
    user: UserResponse;
}
