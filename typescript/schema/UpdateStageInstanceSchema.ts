import { StageInstancesPrivacyLevels } from './StageInstancesPrivacyLevels';

export interface UpdateStageInstanceSchema {
    privacy_level?: StageInstancesPrivacyLevels;
    topic?: string;
}