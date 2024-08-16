import { TextStyleTypes } from './TextStyleTypes';

export interface InputText {
    custom_id: string;
    label: string;
    max_length?: number | null;
    min_length?: number | null;
    placeholder?: string | null;
    required?: boolean | null;
    style: TextStyleTypes;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 4;
    value?: string | null;
}