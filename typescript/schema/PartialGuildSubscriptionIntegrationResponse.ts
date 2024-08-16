import { AccountResponse } from './AccountResponse';
import { SnowflakeType } from './SnowflakeType';

export interface PartialGuildSubscriptionIntegrationResponse {
    account?: null | AccountResponse;
    id: SnowflakeType;
    name?: string | null;
    /** @enum {string} */
    type: "guild_subscription";
}