import { GuildMemberResponse } from './GuildMemberResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface ScheduledEventUserResponse {
    guild_scheduled_event_id: SnowflakeType;
    member?: null | GuildMemberResponse;
    user?: null | UserResponse;
    user_id: SnowflakeType;
}