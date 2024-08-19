import { SettingsEmojiResponse } from './SettingsEmojiResponse';
import { SnowflakeType } from './SnowflakeType';

export interface ResourceChannelResponse {
    channel_id: SnowflakeType;
    description: string;
    emoji?: null | SettingsEmojiResponse;
    icon?: string | null;
    title: string;
}