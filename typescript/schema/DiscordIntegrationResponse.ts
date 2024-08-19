import { AccountResponse } from './AccountResponse';
import { IntegrationApplicationResponse } from './IntegrationApplicationResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface DiscordIntegrationResponse {
    account?: null | AccountResponse;
    application: IntegrationApplicationResponse;
    enabled?: boolean | null;
    id: SnowflakeType;
    name?: string | null;
    scopes: ("applications.commands" | "bot" | "webhook.incoming")[];
    /** @enum {string} */
    type: "discord";
    user?: null | UserResponse;
}