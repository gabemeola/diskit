import { AutomodEventType } from './AutomodEventType';
import { BlockMessageActionResponse } from './BlockMessageActionResponse';
import { DefaultKeywordListTriggerMetadataResponse } from './DefaultKeywordListTriggerMetadataResponse';
import { FlagToChannelActionResponse } from './FlagToChannelActionResponse';
import { QuarantineUserActionResponse } from './QuarantineUserActionResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserCommunicationDisabledActionResponse } from './UserCommunicationDisabledActionResponse';

export interface DefaultKeywordRuleResponse {
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    creator_id: SnowflakeType;
    enabled?: boolean | null;
    event_type: AutomodEventType;
    exempt_channels?: SnowflakeType[] | null;
    exempt_roles?: SnowflakeType[] | null;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    name: string;
    trigger_metadata: DefaultKeywordListTriggerMetadataResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    trigger_type: 4;
}