import { SnowflakeType } from './SnowflakeType';

export interface MessageAttachmentRequest {
    description?: string | null;
    filename?: string | null;
    id: SnowflakeType;
    is_remix?: boolean | null;
}