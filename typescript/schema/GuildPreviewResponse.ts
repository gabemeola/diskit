import { EmojiResponse } from './EmojiResponse';
import { GuildFeatures } from './GuildFeatures';
import { GuildStickerResponse } from './GuildStickerResponse';
import { SnowflakeType } from './SnowflakeType';

export interface GuildPreviewResponse {
    /** Format: int32 */
    approximate_member_count: number;
    /** Format: int32 */
    approximate_presence_count: number;
    description?: string | null;
    discovery_splash?: string | null;
    emojis: EmojiResponse[];
    features: GuildFeatures[];
    home_header?: string | null;
    icon?: string | null;
    id: SnowflakeType;
    name: string;
    splash?: string | null;
    stickers: GuildStickerResponse[];
}