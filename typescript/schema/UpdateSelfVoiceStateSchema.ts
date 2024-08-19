import { SnowflakeType } from './SnowflakeType';

export interface UpdateSelfVoiceStateSchema {
    channel_id?: null | SnowflakeType;
    /** Format: date-time */
    request_to_speak_timestamp?: string | null;
    suppress?: boolean | null;
}