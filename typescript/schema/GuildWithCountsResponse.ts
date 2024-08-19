import { AfkTimeouts } from './AfkTimeouts';
import { AvailableLocalesEnum } from './AvailableLocalesEnum';
import { EmojiResponse } from './EmojiResponse';
import { GuildExplicitContentFilterTypes } from './GuildExplicitContentFilterTypes';
import { GuildFeatures } from './GuildFeatures';
import { GuildMFALevel } from './GuildMFALevel';
import { GuildNSFWContentLevel } from './GuildNSFWContentLevel';
import { GuildRoleResponse } from './GuildRoleResponse';
import { GuildStickerResponse } from './GuildStickerResponse';
import { PremiumGuildTiers } from './PremiumGuildTiers';
import { SnowflakeType } from './SnowflakeType';
import { UserNotificationSettings } from './UserNotificationSettings';
import { VerificationLevels } from './VerificationLevels';

export interface GuildWithCountsResponse {
    afk_channel_id?: null | SnowflakeType;
    afk_timeout: AfkTimeouts;
    application_id?: null | SnowflakeType;
    /** Format: int32 */
    approximate_member_count?: number | null;
    /** Format: int32 */
    approximate_presence_count?: number | null;
    banner?: string | null;
    default_message_notifications: UserNotificationSettings;
    description?: string | null;
    discovery_splash?: string | null;
    emojis: EmojiResponse[];
    explicit_content_filter: GuildExplicitContentFilterTypes;
    features: GuildFeatures[];
    home_header?: string | null;
    icon?: string | null;
    id: SnowflakeType;
    /** Format: int32 */
    max_members?: number | null;
    /** Format: int32 */
    max_presences?: number | null;
    /** Format: int32 */
    max_stage_video_channel_users?: number | null;
    /** Format: int32 */
    max_video_channel_users?: number | null;
    mfa_level: GuildMFALevel;
    name: string;
    nsfw: boolean;
    nsfw_level: GuildNSFWContentLevel;
    owner_id: SnowflakeType;
    preferred_locale: AvailableLocalesEnum;
    premium_progress_bar_enabled: boolean;
    /** Format: int32 */
    premium_subscription_count: number;
    premium_tier: PremiumGuildTiers;
    public_updates_channel_id?: null | SnowflakeType;
    region: string;
    roles: GuildRoleResponse[];
    rules_channel_id?: null | SnowflakeType;
    safety_alerts_channel_id?: null | SnowflakeType;
    splash?: string | null;
    stickers: GuildStickerResponse[];
    /** Format: int32 */
    system_channel_flags: number;
    system_channel_id?: null | SnowflakeType;
    vanity_url_code?: string | null;
    verification_level: VerificationLevels;
    widget_channel_id?: null | SnowflakeType;
    widget_enabled: boolean;
}