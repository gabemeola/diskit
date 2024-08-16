import { SnowflakeType } from './SnowflakeType';

export type ConnectedAccountGuildResponse = {
    icon?: string | null;
    id: SnowflakeType;
    name: string;
}
