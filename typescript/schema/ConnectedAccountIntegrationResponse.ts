import { AccountResponse } from './AccountResponse';
import { ConnectedAccountGuildResponse } from './ConnectedAccountGuildResponse';
import { IntegrationTypes } from './IntegrationTypes';

export type ConnectedAccountIntegrationResponse = {
    account: AccountResponse;
    guild: ConnectedAccountGuildResponse;
    id: string;
    type: IntegrationTypes;
}
