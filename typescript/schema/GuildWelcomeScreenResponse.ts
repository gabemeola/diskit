import { GuildWelcomeScreenChannelResponse } from './GuildWelcomeScreenChannelResponse';

export interface GuildWelcomeScreenResponse {
    description?: string | null;
    welcome_channels: GuildWelcomeScreenChannelResponse[];
}