import { SnowflakeType } from './SnowflakeType';
import { TeamMembershipStates } from './TeamMembershipStates';
import { UserResponse } from './UserResponse';

export type TeamMemberResponse = {
    membership_state: TeamMembershipStates;
    team_id: SnowflakeType;
    user: UserResponse;
}
