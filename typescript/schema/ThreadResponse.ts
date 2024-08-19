import { SnowflakeType } from './SnowflakeType';
import { ThreadMemberResponse } from './ThreadMemberResponse';
import { ThreadMetadataResponse } from './ThreadMetadataResponse';
import { VideoQualityModes } from './VideoQualityModes';

export interface ThreadResponse {
    applied_tags?: SnowflakeType[] | null;
    /** Format: int32 */
    bitrate?: number | null;
    /** Format: int32 */
    flags: number;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    last_message_id?: null | SnowflakeType;
    /** Format: date-time */
    last_pin_timestamp?: string | null;
    member?: null | ThreadMemberResponse;
    /** Format: int32 */
    member_count: number;
    /** Format: int32 */
    message_count: number;
    name: string;
    owner_id: SnowflakeType;
    parent_id?: null | SnowflakeType;
    permissions?: string | null;
    /** Format: int32 */
    rate_limit_per_user?: number | null;
    rtc_region?: string | null;
    thread_metadata?: null | ThreadMetadataResponse;
    /** Format: int32 */
    total_message_sent: number;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 10 | 11 | 12;
    /** Format: int32 */
    user_limit?: number | null;
    video_quality_mode?: null | VideoQualityModes;
}