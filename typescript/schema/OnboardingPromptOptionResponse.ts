import { SettingsEmojiResponse } from './SettingsEmojiResponse';
import { SnowflakeType } from './SnowflakeType';

export interface OnboardingPromptOptionResponse {
    channel_ids: SnowflakeType[];
    description: string;
    emoji: SettingsEmojiResponse;
    id: SnowflakeType;
    role_ids: SnowflakeType[];
    title: string;
}