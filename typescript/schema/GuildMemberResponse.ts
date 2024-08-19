import { SnowflakeType } from './SnowflakeType';
import { UserAvatarDecorationResponse } from './UserAvatarDecorationResponse';
import { UserResponse } from './UserResponse';

export interface GuildMemberResponse {
    avatar?: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    banner?: string | null;
    /** Format: date-time */
    communication_disabled_until?: string | null;
    deaf: boolean;
    /** Format: int32 */
    flags: number;
    /** Format: date-time */
    joined_at: string;
    mute: boolean;
    nick?: string | null;
    pending: boolean;
    /** Format: date-time */
    premium_since?: string | null;
    roles: SnowflakeType[];
    user: UserResponse;
}