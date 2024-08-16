import { NewMemberActionResponse } from './NewMemberActionResponse';
import { ResourceChannelResponse } from './ResourceChannelResponse';
import { SnowflakeType } from './SnowflakeType';
import { WelcomeMessageResponse } from './WelcomeMessageResponse';

export interface GuildHomeSettingsResponse {
    enabled: boolean;
    guild_id: SnowflakeType;
    new_member_actions?: (null | NewMemberActionResponse)[] | null;
    resource_channels?: (null | ResourceChannelResponse)[] | null;
    welcome_message?: null | WelcomeMessageResponse;
}