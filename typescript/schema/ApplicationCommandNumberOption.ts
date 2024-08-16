import { ApplicationCommandOptionNumberChoice } from './ApplicationCommandOptionNumberChoice';

export interface ApplicationCommandNumberOption {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionNumberChoice[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    /** Format: double */
    max_value?: number | null;
    /** Format: double */
    min_value?: number | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 10;
}