import { GuildChannelResponse } from './GuildChannelResponse';
import { PrivateChannelResponse } from './PrivateChannelResponse';
import { PrivateGroupChannelResponse } from './PrivateGroupChannelResponse';
import { ThreadResponse } from './ThreadResponse';

export type GetChannelSchema = GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse