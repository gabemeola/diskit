import { DiscordIntegrationResponse } from './DiscordIntegrationResponse';
import { ExternalConnectionIntegrationResponse } from './ExternalConnectionIntegrationResponse';
import { GuildSubscriptionIntegrationResponse } from './GuildSubscriptionIntegrationResponse';

export type ListGuildIntegrationsSchema = (DiscordIntegrationResponse | ExternalConnectionIntegrationResponse | GuildSubscriptionIntegrationResponse)[] | null