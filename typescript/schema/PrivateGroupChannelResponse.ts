import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface PrivateGroupChannelResponse {
    application_id?: null | SnowflakeType;
    /** Format: int32 */
    flags: number;
    icon?: string | null;
    id: SnowflakeType;
    last_message_id?: null | SnowflakeType;
    /** Format: date-time */
    last_pin_timestamp?: string | null;
    managed?: boolean | null;
    name?: string | null;
    owner_id?: null | SnowflakeType;
    recipients: UserResponse[];
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 3;
}