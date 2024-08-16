import { OnboardingPromptResponse } from './OnboardingPromptResponse';
import { SnowflakeType } from './SnowflakeType';

export interface UserGuildOnboardingResponse {
    default_channel_ids: SnowflakeType[];
    enabled: boolean;
    guild_id: SnowflakeType;
    prompts: OnboardingPromptResponse[];
}