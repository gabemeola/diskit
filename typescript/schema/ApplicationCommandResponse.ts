import { SnowflakeType } from './SnowflakeType';
import { SnowflakeType } from './SnowflakeType';
import { SnowflakeType } from './SnowflakeType';
import { ApplicationCommandType } from './ApplicationCommandType';

export type ApplicationCommandResponse = {
	id: SnowflakeType;
	application_id: SnowflakeType;
	version: SnowflakeType;
	default_member_permissions?: string | null;
	type: ApplicationCommandType;
	name: string;
	name_localized?: string | null;
	name_localizations?: unknown | null;
	description: string;
	description_localized?: string | null;
	description_localizations?: unknown | null;
	dm_permission?: boolean | null;
	options?: Array<unknown> | null;
	nsfw?: boolean | null;
}