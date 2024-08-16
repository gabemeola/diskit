import { ApplicationCommandOptionStringChoice } from './ApplicationCommandOptionStringChoice';

export interface ApplicationCommandStringOption {
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionStringChoice[] | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    max_length?: number | null;
    min_length?: number | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 3;
}