import { SnowflakeType } from './SnowflakeType';
import { StickerFormatTypes } from './StickerFormatTypes';

export interface StandardStickerResponse {
    description?: string | null;
    format_type?: null | StickerFormatTypes;
    id: SnowflakeType;
    name: string;
    pack_id: SnowflakeType;
    /** Format: int32 */
    sort_value: number;
    tags: string;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}