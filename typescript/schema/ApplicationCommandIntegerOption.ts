import { ApplicationCommandOptionIntegerChoice } from './ApplicationCommandOptionIntegerChoice';
import { Int53Type } from './Int53Type';

export interface ApplicationCommandIntegerOption {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionIntegerChoice[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    max_value?: null | Int53Type;
    min_value?: null | Int53Type;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 4;
}
