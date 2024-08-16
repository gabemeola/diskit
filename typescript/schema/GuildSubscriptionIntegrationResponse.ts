import { AccountResponse } from './AccountResponse';
import { SnowflakeType } from './SnowflakeType';

export interface GuildSubscriptionIntegrationResponse {
    account?: null | AccountResponse;
    enabled?: boolean | null;
    id: SnowflakeType;
    name?: string | null;
    /** @enum {string} */
    type: "guild_subscription";
}