import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface PrivateChannelResponse {
    /** Format: int32 */
    flags: number;
    id: SnowflakeType;
    last_message_id?: null | SnowflakeType;
    /** Format: date-time */
    last_pin_timestamp?: string | null;
    recipients: UserResponse[];
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}