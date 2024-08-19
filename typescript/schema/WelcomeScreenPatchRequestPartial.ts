import { GuildWelcomeChannel } from './GuildWelcomeChannel';

export interface WelcomeScreenPatchRequestPartial {
    description?: string | null;
    enabled?: boolean | null;
    welcome_channels?: GuildWelcomeChannel[] | null;
}