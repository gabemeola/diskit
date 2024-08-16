import { EntityMetadataStageInstanceResponse } from './EntityMetadataStageInstanceResponse';
import { GuildScheduledEventPrivacyLevels } from './GuildScheduledEventPrivacyLevels';
import { GuildScheduledEventStatuses } from './GuildScheduledEventStatuses';
import { ScheduledEventUserResponse } from './ScheduledEventUserResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface StageScheduledEventResponse {
    channel_id?: null | SnowflakeType;
    creator?: null | UserResponse;
    creator_id?: null | SnowflakeType;
    description?: string | null;
    entity_id?: null | SnowflakeType;
    entity_metadata?: null | EntityMetadataStageInstanceResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    entity_type: 1;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    image?: string | null;
    name: string;
    privacy_level: GuildScheduledEventPrivacyLevels;
    /** Format: date-time */
    scheduled_end_time?: string | null;
    /** Format: date-time */
    scheduled_start_time: string;
    status: GuildScheduledEventStatuses;
    /** Format: int32 */
    user_count?: number | null;
    user_rsvp?: null | ScheduledEventUserResponse;
}