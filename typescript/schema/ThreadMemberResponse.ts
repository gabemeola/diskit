import { GuildMemberResponse } from './GuildMemberResponse';
import { SnowflakeType } from './SnowflakeType';

export interface ThreadMemberResponse {
    /** Format: int32 */
    flags: number;
    id: SnowflakeType;
    /** Format: date-time */
    join_timestamp: string;
    member?: null | GuildMemberResponse;
    user_id: SnowflakeType;
}