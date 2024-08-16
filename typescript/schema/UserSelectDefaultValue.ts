import { SnowflakeType } from './SnowflakeType';

export interface UserSelectDefaultValue {
    id: SnowflakeType;
    /** @enum {string} */
    type: "user";
}