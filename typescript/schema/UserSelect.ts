import { UserSelectDefaultValue } from './UserSelectDefaultValue';

export interface UserSelect {
    custom_id: string;
    default_values?: UserSelectDefaultValue[] | null;
    disabled?: boolean | null;
    max_values?: number | null;
    min_values?: number | null;
    placeholder?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 5;
}