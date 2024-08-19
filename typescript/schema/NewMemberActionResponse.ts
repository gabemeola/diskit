import { NewMemberActionType } from './NewMemberActionType';
import { SettingsEmojiResponse } from './SettingsEmojiResponse';
import { SnowflakeType } from './SnowflakeType';

export interface NewMemberActionResponse {
    action_type: NewMemberActionType;
    channel_id: SnowflakeType;
    description: string;
    emoji?: null | SettingsEmojiResponse;
    icon?: string | null;
    title: string;
}