import { AccountResponse } from './AccountResponse';
import { ConnectedAccountGuildResponse } from './ConnectedAccountGuildResponse';
import { IntegrationTypes } from './IntegrationTypes';

export interface ConnectedAccountIntegrationResponse {
    account: AccountResponse;
    guild: ConnectedAccountGuildResponse;
    id: string;
    type: IntegrationTypes;
}