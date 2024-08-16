import { SnowflakeType } from './SnowflakeType';

export interface BulkUpdateGuildChannelsSchema {
    id?: SnowflakeType;
    lock_permissions?: boolean | null;
    parent_id?: null | SnowflakeType;
    /** Format: int32 */
    position?: number | null;
}