import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface ApplicationIncomingWebhookResponse {
    application_id?: null | SnowflakeType;
    avatar?: string | null;
    channel_id?: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 3;
    user?: null | UserResponse;
}