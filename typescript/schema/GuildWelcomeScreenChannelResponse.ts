import { SnowflakeType } from './SnowflakeType';

export interface GuildWelcomeScreenChannelResponse {
    channel_id: SnowflakeType;
    description: string;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
}