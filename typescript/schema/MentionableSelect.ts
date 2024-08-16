import { RoleSelectDefaultValue } from './RoleSelectDefaultValue';
import { UserSelectDefaultValue } from './UserSelectDefaultValue';

export interface MentionableSelect {
    custom_id: string;
    default_values?: (RoleSelectDefaultValue | UserSelectDefaultValue)[] | null;
    disabled?: boolean | null;
    max_values?: number | null;
    min_values?: number | null;
    placeholder?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 7;
}