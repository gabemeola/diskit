import { ApplicationCommandSubcommandOption } from './ApplicationCommandSubcommandOption';

export interface ApplicationCommandSubcommandGroupOption {
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    options?: ApplicationCommandSubcommandOption[] | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 2;
}