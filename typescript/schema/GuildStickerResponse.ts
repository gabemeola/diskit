import { SnowflakeType } from './SnowflakeType';
import { StickerFormatTypes } from './StickerFormatTypes';
import { UserResponse } from './UserResponse';

export interface GuildStickerResponse {
    available: boolean;
    description?: string | null;
    format_type?: null | StickerFormatTypes;
    guild_id: SnowflakeType;
    id: SnowflakeType;
    name: string;
    tags: string;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 2;
    user?: null | UserResponse;
}