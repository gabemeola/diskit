import { SnowflakeType } from './SnowflakeType';

export interface UpdateGuildEmojiSchema {
    name?: string;
    roles?: (null | SnowflakeType)[] | null;
}