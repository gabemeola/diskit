
export interface ApplicationCommandRoleOptionResponse {
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    description_localized?: string | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    name_localized?: string | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 8;
}