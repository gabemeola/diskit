import { ApplicationResponse } from './ApplicationResponse';
import { OAuth2Scopes } from './OAuth2Scopes';
import { UserResponse } from './UserResponse';

export interface OAuth2GetAuthorizationResponse {
    application: ApplicationResponse;
    /** Format: date-time */
    expires: string;
    scopes: OAuth2Scopes[];
    user?: null | UserResponse;
}