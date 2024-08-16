import { SnowflakeType } from './SnowflakeType';

export interface ConnectedAccountGuildResponse {
    icon?: string | null;
    id: SnowflakeType;
    name: string;
}