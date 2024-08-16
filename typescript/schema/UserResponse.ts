import { Int53Type } from './Int53Type';
import { SnowflakeType } from './SnowflakeType';

export type UserResponse = {
    /** Format: int32 */
    accent_color?: number | null;
    avatar?: string | null;
    banner?: string | null;
    bot?: boolean | null;
    discriminator: string;
    flags: Int53Type;
    global_name?: string | null;
    id: SnowflakeType;
    /** Format: int32 */
    public_flags: number;
    system?: boolean | null;
    username: string;
}
