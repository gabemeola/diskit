import { GuildTemplateSnapshotResponse } from './GuildTemplateSnapshotResponse';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface GuildTemplateResponse {
    code: string;
    /** Format: date-time */
    created_at: string;
    creator?: null | UserResponse;
    creator_id: SnowflakeType;
    description?: string | null;
    is_dirty?: boolean | null;
    name: string;
    serialized_source_guild: GuildTemplateSnapshotResponse;
    source_guild_id: SnowflakeType;
    /** Format: date-time */
    updated_at: string;
    /** Format: int32 */
    usage_count: number;
}