import { AfkTimeouts } from './AfkTimeouts';
import { AvailableLocalesEnum } from './AvailableLocalesEnum';
import { GuildExplicitContentFilterTypes } from './GuildExplicitContentFilterTypes';
import { GuildTemplateChannelResponse } from './GuildTemplateChannelResponse';
import { GuildTemplateRoleResponse } from './GuildTemplateRoleResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserNotificationSettings } from './UserNotificationSettings';
import { VerificationLevels } from './VerificationLevels';

export interface GuildTemplateSnapshotResponse {
    afk_channel_id?: null | SnowflakeType;
    afk_timeout: AfkTimeouts;
    channels: GuildTemplateChannelResponse[];
    default_message_notifications: UserNotificationSettings;
    description?: string | null;
    explicit_content_filter: GuildExplicitContentFilterTypes;
    name: string;
    preferred_locale: AvailableLocalesEnum;
    region?: string | null;
    roles: GuildTemplateRoleResponse[];
    /** Format: int32 */
    system_channel_flags: number;
    system_channel_id?: null | SnowflakeType;
    verification_level: VerificationLevels;
}