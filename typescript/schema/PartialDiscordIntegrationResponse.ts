import { AccountResponse } from './AccountResponse';
import { SnowflakeType } from './SnowflakeType';

export interface PartialDiscordIntegrationResponse {
    account?: null | AccountResponse;
    application_id: SnowflakeType;
    id: SnowflakeType;
    name?: string | null;
    /** @enum {string} */
    type: "discord";
}