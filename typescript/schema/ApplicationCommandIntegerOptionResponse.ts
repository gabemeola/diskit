import { ApplicationCommandOptionIntegerChoiceResponse } from './ApplicationCommandOptionIntegerChoiceResponse';
import { Int53Type } from './Int53Type';

export type ApplicationCommandIntegerOptionResponse = {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionIntegerChoiceResponse[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    description_localized?: string | null;
    max_value?: null | Int53Type;
    min_value?: null | Int53Type;
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
    type: 4;
}
