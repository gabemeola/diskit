import { SnowflakeType } from './SnowflakeType';

export type BulkUpdateGuildRolesSchema = {
    id?: null | SnowflakeType;
    /** Format: int32 */
    position?: number | null;
}[]