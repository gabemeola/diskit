import { ApplicationCommandOptionNumberChoiceResponse } from './ApplicationCommandOptionNumberChoiceResponse';

export interface ApplicationCommandNumberOptionResponse {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionNumberChoiceResponse[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    description_localized?: string | null;
    /** Format: double */
    max_value?: number | null;
    /** Format: double */
    min_value?: number | null;
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
    type: 10;
}
