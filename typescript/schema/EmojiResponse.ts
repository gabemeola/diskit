import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface EmojiResponse {
    animated: boolean;
    available: boolean;
    id: SnowflakeType;
    managed: boolean;
    name: string;
    require_colons: boolean;
    roles: SnowflakeType[];
    user?: null | UserResponse;
}