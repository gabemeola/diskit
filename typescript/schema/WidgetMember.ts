import { SnowflakeType } from './SnowflakeType';
import { WidgetActivity } from './WidgetActivity';
import { WidgetUserDiscriminator } from './WidgetUserDiscriminator';

export interface WidgetMember {
    activity?: null | WidgetActivity;
    avatar?: null;
    /** Format: uri */
    avatar_url: string;
    channel_id?: null | SnowflakeType;
    deaf?: boolean | null;
    discriminator: WidgetUserDiscriminator;
    id: string;
    mute?: boolean | null;
    self_deaf?: boolean | null;
    self_mute?: boolean | null;
    status: string;
    suppress?: boolean | null;
    username: string;
}