import { SnowflakeType } from './SnowflakeType';

export interface UpdateWebhookSchema {
    avatar?: string | null;
    channel_id?: null | SnowflakeType;
    name?: string;
}