import { OnboardingPromptOptionResponse } from './OnboardingPromptOptionResponse';
import { OnboardingPromptType } from './OnboardingPromptType';
import { SnowflakeType } from './SnowflakeType';

export interface OnboardingPromptResponse {
    id: SnowflakeType;
    in_onboarding: boolean;
    options: OnboardingPromptOptionResponse[];
    required: boolean;
    single_select: boolean;
    title: string;
    type: OnboardingPromptType;
}