import { AutomodKeywordPresetType } from './AutomodKeywordPresetType';

export interface DefaultKeywordListTriggerMetadataResponse {
    allow_list: string[];
    presets: AutomodKeywordPresetType[];
}