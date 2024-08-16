import { ApplicationOAuth2InstallParams } from './ApplicationOAuth2InstallParams';
import { ApplicationTypes } from './ApplicationTypes';
import { SnowflakeType } from './SnowflakeType';

export interface ApplicationFormPartial {
    cover_image?: string | null;
    /** Format: uri */
    custom_install_url?: string | null;
    description?: {
        default: string;
        localizations?: {
            [key: string]: string;
        } | null;
    } | null;
    flags?: number | null;
    icon?: string | null;
    install_params?: null | ApplicationOAuth2InstallParams;
    /** Format: uri */
    interactions_endpoint_url?: string | null;
    /** Format: int32 */
    max_participants?: number | null;
    /** Format: uri */
    role_connections_verification_url?: string | null;
    tags?: string[] | null;
    team_id?: null | SnowflakeType;
    type?: null | ApplicationTypes;
}