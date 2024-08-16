import { ApplicationIncomingWebhookResponse } from './ApplicationIncomingWebhookResponse';
import { ChannelFollowerWebhookResponse } from './ChannelFollowerWebhookResponse';
import { GuildIncomingWebhookResponse } from './GuildIncomingWebhookResponse';

export type GetWebhookSchema = ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse