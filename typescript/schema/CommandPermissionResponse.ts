import { ApplicationCommandPermissionType } from './ApplicationCommandPermissionType';
import { SnowflakeType } from './SnowflakeType';

export type CommandPermissionResponse = {
    id: SnowflakeType;
    permission: boolean;
    type: ApplicationCommandPermissionType;
}
