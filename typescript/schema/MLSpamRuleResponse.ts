import { AutomodEventType } from './AutomodEventType';
import { BlockMessageActionResponse } from './BlockMessageActionResponse';
import { FlagToChannelActionResponse } from './FlagToChannelActionResponse';
import { MLSpamTriggerMetadataResponse } from './MLSpamTriggerMetadataResponse';
import { QuarantineUserActionResponse } from './QuarantineUserActionResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserCommunicationDisabledActionResponse } from './UserCommunicationDisabledActionResponse';

export interface MLSpamRuleResponse {
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    creator_id: SnowflakeType;
    enabled?: boolean | null;
    event_type: AutomodEventType;
    exempt_channels?: SnowflakeType[] | null;
    exempt_roles?: SnowflakeType[] | null;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    name: string;
    trigger_metadata: MLSpamTriggerMetadataResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    trigger_type: 3;
}