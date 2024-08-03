import { AvailableLocalesEnum } from './AvailableLocalesEnum';
import { SnowflakeType } from './SnowflakeType';
import { Int53Type } from './Int53Type';

export type UserPIIResponse = {
	id: SnowflakeType;
	username: string;
	avatar?: string | null;
	discriminator: string;
	public_flags: number;
	flags: Int53Type;
	bot?: boolean | null;
	system?: boolean | null;
	banner?: string | null;
	accent_color?: number | null;
	global_name?: string | null;
	mfa_enabled: boolean;
	locale: AvailableLocalesEnum;
	email?: string | null;
	verified?: boolean | null;
}