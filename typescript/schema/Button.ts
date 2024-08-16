import { ButtonStyleTypes } from './ButtonStyleTypes';
import { Emoji } from './Emoji';
import { SnowflakeType } from './SnowflakeType';

export interface Button {
    custom_id?: string | null;
    disabled?: boolean | null;
    emoji?: null | Emoji;
    label?: string | null;
    sku_id?: null | SnowflakeType;
    style: ButtonStyleTypes;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 2;
    /** Format: uri */
    url?: string | null;
}