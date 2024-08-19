import { AccountResponse } from './AccountResponse';
import { IntegrationExpireBehaviorTypes } from './IntegrationExpireBehaviorTypes';
import { IntegrationExpireGracePeriodTypes } from './IntegrationExpireGracePeriodTypes';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface ExternalConnectionIntegrationResponse {
    account?: null | AccountResponse;
    enable_emoticons?: boolean | null;
    enabled?: boolean | null;
    expire_behavior?: null | IntegrationExpireBehaviorTypes;
    expire_grace_period?: null | IntegrationExpireGracePeriodTypes;
    id: string;
    name?: string | null;
    revoked?: boolean | null;
    role_id?: null | SnowflakeType;
    /** Format: int32 */
    subscriber_count?: number | null;
    /** Format: date-time */
    synced_at?: string | null;
    syncing?: boolean | null;
    /** @enum {string} */
    type: "twitch" | "youtube";
    user: UserResponse;
}