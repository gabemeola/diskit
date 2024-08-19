import { AllowedMentionTypes } from './AllowedMentionTypes';
import { SnowflakeType } from './SnowflakeType';

export interface MessageAllowedMentionsRequest {
    parse?: (null | AllowedMentionTypes)[] | null;
    replied_user?: boolean | null;
    roles?: (null | SnowflakeType)[] | null;
    users?: (null | SnowflakeType)[] | null;
}