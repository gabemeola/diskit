import { RoleSelectDefaultValue } from './RoleSelectDefaultValue';

export interface RoleSelect {
    custom_id: string;
    default_values?: RoleSelectDefaultValue[] | null;
    disabled?: boolean | null;
    max_values?: number | null;
    min_values?: number | null;
    placeholder?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 6;
}