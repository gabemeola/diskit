
export interface ApplicationCommandBooleanOption {
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 5;
}
