import { SelectOption } from './SelectOption';

export interface StringSelect {
    custom_id: string;
    disabled?: boolean | null;
    max_values?: number | null;
    min_values?: number | null;
    options: SelectOption[];
    placeholder?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 3;
}