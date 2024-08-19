import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';
import { WebhookSourceChannelResponse } from './WebhookSourceChannelResponse';
import { WebhookSourceGuildResponse } from './WebhookSourceGuildResponse';

export interface ChannelFollowerWebhookResponse {
    application_id?: null | SnowflakeType;
    avatar?: string | null;
    channel_id?: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    source_channel?: null | WebhookSourceChannelResponse;
    source_guild?: null | WebhookSourceGuildResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 2;
    user?: null | UserResponse;
}