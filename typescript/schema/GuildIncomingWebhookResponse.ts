import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface GuildIncomingWebhookResponse {
    application_id?: null | SnowflakeType;
    avatar?: string | null;
    channel_id?: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    token?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
    /** Format: uri */
    url?: string | null;
    user?: null | UserResponse;
}