import { SnowflakeType } from './SnowflakeType';

export interface RoleSelectDefaultValue {
    id: SnowflakeType;
    /** @enum {string} */
    type: "role";
}