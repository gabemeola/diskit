import { SnowflakeType } from './SnowflakeType';

export interface SettingsEmojiResponse {
    animated?: boolean | null;
    id?: null | SnowflakeType;
    name?: string | null;
}