import { SnowflakeType } from './SnowflakeType';

export interface UpdateGuildWidgetSettingsSchema {
    channel_id?: null | SnowflakeType;
    enabled?: boolean | null;
}