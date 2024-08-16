import { CommandPermissionResponse } from './CommandPermissionResponse';
import { SnowflakeType } from './SnowflakeType';

export type CommandPermissionsResponse = {
    application_id: SnowflakeType;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    permissions: CommandPermissionResponse[];
}
