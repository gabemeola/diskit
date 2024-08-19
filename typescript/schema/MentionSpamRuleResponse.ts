import { AutomodEventType } from './AutomodEventType';
import { BlockMessageActionResponse } from './BlockMessageActionResponse';
import { FlagToChannelActionResponse } from './FlagToChannelActionResponse';
import { MentionSpamTriggerMetadataResponse } from './MentionSpamTriggerMetadataResponse';
import { QuarantineUserActionResponse } from './QuarantineUserActionResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserCommunicationDisabledActionResponse } from './UserCommunicationDisabledActionResponse';

export interface MentionSpamRuleResponse {
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    creator_id: SnowflakeType;
    enabled?: boolean | null;
    event_type: AutomodEventType;
    exempt_channels?: SnowflakeType[] | null;
    exempt_roles?: SnowflakeType[] | null;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    name: string;
    trigger_metadata: MentionSpamTriggerMetadataResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    trigger_type: 5;
}