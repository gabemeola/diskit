import { SnowflakeType } from './SnowflakeType';
import { StandardStickerResponse } from './StandardStickerResponse';

export interface StickerPackResponse {
    banner_asset_id?: null | SnowflakeType;
    cover_sticker_id?: null | SnowflakeType;
    description?: string | null;
    id: SnowflakeType;
    name: string;
    sku_id: SnowflakeType;
    stickers: StandardStickerResponse[];
}