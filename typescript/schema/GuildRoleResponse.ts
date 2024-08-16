import { GuildRoleTagsResponse } from './GuildRoleTagsResponse';
import { SnowflakeType } from './SnowflakeType';

export interface GuildRoleResponse {
    /** Format: int32 */
    color: number;
    description?: string | null;
    hoist: boolean;
    icon?: string | null;
    id: SnowflakeType;
    managed: boolean;
    mentionable: boolean;
    name: string;
    permissions: string;
    /** Format: int32 */
    position: number;
    tags?: null | GuildRoleTagsResponse;
    unicode_emoji?: string | null;
}