import { AvailableLocalesEnum } from './AvailableLocalesEnum';
import { PremiumTypes } from './PremiumTypes';
import { Int53Type } from './Int53Type';
import { SnowflakeType } from './SnowflakeType';

export type UserPIIResponse = {
    /** Format: int32 */
    accent_color?: number | null;
    avatar?: string | null;
    banner?: string | null;
    bot?: boolean | null;
    discriminator: string;
    email?: string | null;
    flags: Int53Type;
    global_name?: string | null;
    id: SnowflakeType;
    locale: AvailableLocalesEnum;
    mfa_enabled: boolean;
    premium_type?: null | PremiumTypes;
    /** Format: int32 */
    public_flags: number;
    system?: boolean | null;
    username: string;
    verified?: boolean | null;
}
