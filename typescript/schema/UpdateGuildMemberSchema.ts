import { SnowflakeType } from './SnowflakeType';

export interface UpdateGuildMemberSchema {
    channel_id?: null | SnowflakeType;
    /** Format: date-time */
    communication_disabled_until?: string | null;
    deaf?: boolean | null;
    flags?: number | null;
    mute?: boolean | null;
    nick?: string | null;
    roles?: (null | SnowflakeType)[] | null;
}