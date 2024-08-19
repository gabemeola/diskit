import { SnowflakeType } from './SnowflakeType';

export interface Emoji {
    animated?: boolean | null;
    id?: null | SnowflakeType;
    name: string;
}