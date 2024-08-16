import { ChannelPermissionOverwriteResponse } from './ChannelPermissionOverwriteResponse';
import { DefaultReactionEmojiResponse } from './DefaultReactionEmojiResponse';
import { ForumLayout } from './ForumLayout';
import { GuildTemplateChannelTags } from './GuildTemplateChannelTags';
import { IconEmojiResponse } from './IconEmojiResponse';
import { SnowflakeType } from './SnowflakeType';
import { ThreadAutoArchiveDuration } from './ThreadAutoArchiveDuration';
import { ThreadSortOrder } from './ThreadSortOrder';

export interface GuildTemplateChannelResponse {
    available_tags?: GuildTemplateChannelTags[] | null;
    /** Format: int32 */
    bitrate: number;
    default_auto_archive_duration?: null | ThreadAutoArchiveDuration;
    default_forum_layout?: null | ForumLayout;
    default_reaction_emoji?: null | DefaultReactionEmojiResponse;
    default_sort_order?: null | ThreadSortOrder;
    /** Format: int32 */
    default_thread_rate_limit_per_user?: number | null;
    icon_emoji?: null | IconEmojiResponse;
    /** Format: int32 */
    id?: number | null;
    name?: string | null;
    nsfw: boolean;
    parent_id?: null | SnowflakeType;
    permission_overwrites: (null | ChannelPermissionOverwriteResponse)[];
    /** Format: int32 */
    position?: number | null;
    /** Format: int32 */
    rate_limit_per_user: number;
    template: string;
    /** Format: int32 */
    theme_color?: number | null;
    topic?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 0 | 2 | 4;
    /** Format: int32 */
    user_limit: number;
}