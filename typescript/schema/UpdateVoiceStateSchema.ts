import { SnowflakeType } from './SnowflakeType';

export interface UpdateVoiceStateSchema {
    channel_id?: null | SnowflakeType;
    suppress?: boolean | null;
}