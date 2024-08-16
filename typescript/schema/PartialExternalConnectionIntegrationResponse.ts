import { AccountResponse } from './AccountResponse';
import { SnowflakeType } from './SnowflakeType';

export interface PartialExternalConnectionIntegrationResponse {
    account?: null | AccountResponse;
    id: SnowflakeType;
    name?: string | null;
    /** @enum {string} */
    type: "twitch" | "youtube";
}