import { SnowflakeType } from './SnowflakeType';
import { Int53Type } from './Int53Type';

export type UserResponse = {
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
}