import { ChannelPermissionOverwrites } from './ChannelPermissionOverwrites';
import { SnowflakeType } from './SnowflakeType';

export interface ChannelPermissionOverwriteResponse {
    allow: string;
    deny: string;
    id: SnowflakeType;
    type: ChannelPermissionOverwrites;
}