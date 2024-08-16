import { SnowflakeType } from './SnowflakeType';

export interface GuildTemplateChannelTags {
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    moderated?: boolean | null;
    name: string;
}