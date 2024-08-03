
export type ApplicationFormPartial = {
	description?: unknown | null;
	icon?: string | null;
	cover_image?: string | null;
	flags?: number | null;
	interactions_endpoint_url?: string | null;
	max_participants?: number | null;
	tags?: Array<unknown> | null;
	custom_install_url?: string | null;
	role_connections_verification_url?: string | null;
}