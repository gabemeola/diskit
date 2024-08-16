import { ApplicationCommandPermissionType } from './ApplicationCommandPermissionType';
import { SnowflakeType } from './SnowflakeType';

export interface CommandPermissionResponse {
    id: SnowflakeType;
    permission: boolean;
    type: ApplicationCommandPermissionType;
}