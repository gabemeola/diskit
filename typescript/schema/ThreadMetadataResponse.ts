import { ThreadAutoArchiveDuration } from './ThreadAutoArchiveDuration';

export interface ThreadMetadataResponse {
    /** Format: date-time */
    archive_timestamp?: string | null;
    archived: boolean;
    auto_archive_duration: ThreadAutoArchiveDuration;
    /** Format: date-time */
    create_timestamp?: string | null;
    invitable?: boolean | null;
    locked: boolean;
}