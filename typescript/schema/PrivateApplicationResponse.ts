import { SnowflakeType } from './SnowflakeType';
import { ApplicationOAuth2InstallParamsResponse } from './ApplicationOAuth2InstallParamsResponse';
import { TeamResponse } from './TeamResponse';
import { ApplicationTypes } from './ApplicationTypes';
import { UserResponse } from './UserResponse';

export type PrivateApplicationResponse = {
    /** Format: int32 */
    approximate_guild_count?: number | null;
    bot?: null | UserResponse;
    bot_public?: boolean | null;
    bot_require_code_grant?: boolean | null;
    cover_image?: string | null;
    /** Format: uri */
    custom_install_url?: string | null;
    description: string;
    /** Format: int32 */
    flags: number;
    guild_id?: null | SnowflakeType;
    icon?: string | null;
    id: SnowflakeType;
    install_params?: null | ApplicationOAuth2InstallParamsResponse;
    /** Format: uri */
    interactions_endpoint_url?: string | null;
    /** Format: int32 */
    max_participants?: number | null;
    name: string;
    owner: UserResponse;
    primary_sku_id?: null | SnowflakeType;
    /** Format: uri */
    privacy_policy_url?: string | null;
    redirect_uris: (string | null)[];
    /** Format: uri */
    role_connections_verification_url?: string | null;
    rpc_origins?: (string | null)[] | null;
    slug?: string | null;
    tags?: string[] | null;
    team?: null | TeamResponse;
    /** Format: uri */
    terms_of_service_url?: string | null;
    type?: null | ApplicationTypes;
    verify_key: string;
}
