import { SnowflakeType } from './SnowflakeType';
import { StageInstancesPrivacyLevels } from './StageInstancesPrivacyLevels';

export interface StageInstanceResponse {
    channel_id: SnowflakeType;
    discoverable_disabled?: boolean | null;
    guild_id: SnowflakeType;
    guild_scheduled_event_id?: null | SnowflakeType;
    id: SnowflakeType;
    privacy_level: StageInstancesPrivacyLevels;
    topic: string;
}