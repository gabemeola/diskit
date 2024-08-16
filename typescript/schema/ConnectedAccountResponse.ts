import { ConnectedAccountIntegrationResponse } from './ConnectedAccountIntegrationResponse';
import { ConnectedAccountProviders } from './ConnectedAccountProviders';
import { ConnectedAccountVisibility } from './ConnectedAccountVisibility';

export interface ConnectedAccountResponse {
    friend_sync: boolean;
    id: string;
    integrations?: ConnectedAccountIntegrationResponse[] | null;
    name?: string | null;
    revoked?: boolean | null;
    show_activity: boolean;
    two_way_link: boolean;
    type: ConnectedAccountProviders;
    verified: boolean;
    visibility: ConnectedAccountVisibility;
}
