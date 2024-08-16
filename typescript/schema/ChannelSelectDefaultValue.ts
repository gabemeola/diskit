import { SnowflakeType } from './SnowflakeType';

export interface ChannelSelectDefaultValue {
    id: SnowflakeType;
    /** @enum {string} */
    type: "channel";
}