import { SnowflakeType } from './SnowflakeType';

export interface WebhookSourceGuildResponse {
    icon?: string | null;
    id: SnowflakeType;
    name: string;
}