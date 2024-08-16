import { ApplicationCommandOptionStringChoiceResponse } from './ApplicationCommandOptionStringChoiceResponse';

export type ApplicationCommandStringOptionResponse = {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionStringChoiceResponse[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    description_localized?: string | null;
    /** Format: int32 */
    max_length?: number | null;
    /** Format: int32 */
    min_length?: number | null;
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
    type: 3;
}
