import { CommandPermissionResponse } from './CommandPermissionResponse';
import { SnowflakeType } from './SnowflakeType';

export interface CommandPermissionsResponse {
    application_id: SnowflakeType;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    permissions: CommandPermissionResponse[];
}