import { UserResponse } from './UserResponse';
import { SnowflakeType } from './SnowflakeType';

export type PrivateApplicationResponse = {
	id: SnowflakeType;
	name: string;
	icon?: string | null;
	description: string;
	cover_image?: string | null;
	slug?: string | null;
	rpc_origins?: Array<unknown> | null;
	bot_public?: boolean | null;
	bot_require_code_grant?: boolean | null;
	terms_of_service_url?: string | null;
	privacy_policy_url?: string | null;
	custom_install_url?: string | null;
	verify_key: string;
	flags: number;
	max_participants?: number | null;
	tags?: Array<unknown> | null;
	redirect_uris: Array<unknown>;
	interactions_endpoint_url?: string | null;
	role_connections_verification_url?: string | null;
	owner: UserResponse;
	approximate_guild_count?: number | null;
}