import { SnowflakeType } from './SnowflakeType';

export interface ForumTagResponse {
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    id: SnowflakeType;
    moderated: boolean;
    name: string;
}