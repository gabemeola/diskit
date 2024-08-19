import { ApplicationIncomingWebhookResponse } from './ApplicationIncomingWebhookResponse';
import { ChannelFollowerWebhookResponse } from './ChannelFollowerWebhookResponse';
import { GuildIncomingWebhookResponse } from './GuildIncomingWebhookResponse';

export type GetWebhookByTokenSchema = ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse