import { AuditLogActionTypes } from './AuditLogActionTypes';
import { AuditLogObjectChangeResponse } from './AuditLogObjectChangeResponse';
import { SnowflakeType } from './SnowflakeType';

export interface AuditLogEntryResponse {
    action_type: AuditLogActionTypes;
    changes?: AuditLogObjectChangeResponse[] | null;
    id: SnowflakeType;
    options?: {
        [key: string]: string;
    } | null;
    reason?: string | null;
    target_id?: null | SnowflakeType;
    user_id?: null | SnowflakeType;
}