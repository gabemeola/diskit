import { AfkTimeouts } from './AfkTimeouts';
import { AvailableLocalesEnum } from './AvailableLocalesEnum';
import { GuildExplicitContentFilterTypes } from './GuildExplicitContentFilterTypes';
import { SnowflakeType } from './SnowflakeType';
import { UserNotificationSettings } from './UserNotificationSettings';
import { VerificationLevels } from './VerificationLevels';

export interface GuildPatchRequestPartial {
    afk_channel_id?: null | SnowflakeType;
    afk_timeout?: null | AfkTimeouts;
    banner?: string | null;
    default_message_notifications?: null | UserNotificationSettings;
    description?: string | null;
    discovery_splash?: string | null;
    explicit_content_filter?: null | GuildExplicitContentFilterTypes;
    features?: (string | null)[] | null;
    home_header?: string | null;
    icon?: string | null;
    name?: string;
    owner_id?: SnowflakeType;
    preferred_locale?: null | AvailableLocalesEnum;
    premium_progress_bar_enabled?: boolean | null;
    public_updates_channel_id?: null | SnowflakeType;
    region?: string | null;
    rules_channel_id?: null | SnowflakeType;
    safety_alerts_channel_id?: null | SnowflakeType;
    splash?: string | null;
    system_channel_flags?: number | null;
    system_channel_id?: null | SnowflakeType;
    verification_level?: null | VerificationLevels;
}