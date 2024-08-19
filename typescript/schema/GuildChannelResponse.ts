import { ChannelPermissionOverwriteResponse } from './ChannelPermissionOverwriteResponse';
import { DefaultReactionEmojiResponse } from './DefaultReactionEmojiResponse';
import { ForumLayout } from './ForumLayout';
import { ForumTagResponse } from './ForumTagResponse';
import { SnowflakeType } from './SnowflakeType';
import { ThreadAutoArchiveDuration } from './ThreadAutoArchiveDuration';
import { ThreadSortOrder } from './ThreadSortOrder';
import { VideoQualityModes } from './VideoQualityModes';

export interface GuildChannelResponse {
    available_tags?: ForumTagResponse[] | null;
    /** Format: int32 */
    bitrate?: number | null;
    default_auto_archive_duration?: null | ThreadAutoArchiveDuration;
    default_forum_layout?: null | ForumLayout;
    default_reaction_emoji?: null | DefaultReactionEmojiResponse;
    default_sort_order?: null | ThreadSortOrder;
    /** Format: int32 */
    default_thread_rate_limit_per_user?: number | null;
    /** Format: int32 */
    flags: number;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    last_message_id?: null | SnowflakeType;
    /** Format: date-time */
    last_pin_timestamp?: string | null;
    name: string;
    nsfw?: boolean | null;
    parent_id?: null | SnowflakeType;
    permission_overwrites?: ChannelPermissionOverwriteResponse[] | null;
    permissions?: string | null;
    /** Format: int32 */
    position: number;
    /** Format: int32 */
    rate_limit_per_user?: number | null;
    rtc_region?: string | null;
    topic?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 0 | 2 | 4 | 5 | 13 | 14 | 15;
    /** Format: int32 */
    user_limit?: number | null;
    video_quality_mode?: null | VideoQualityModes;
}