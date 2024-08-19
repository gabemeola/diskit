import { SnowflakeType } from './SnowflakeType';

export interface WidgetSettingsResponse {
    channel_id?: null | SnowflakeType;
    enabled: boolean;
}