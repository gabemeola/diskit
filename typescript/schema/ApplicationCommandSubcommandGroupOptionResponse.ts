import { ApplicationCommandSubcommandOptionResponse } from './ApplicationCommandSubcommandOptionResponse';

export type ApplicationCommandSubcommandGroupOptionResponse = {
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
    options?: ApplicationCommandSubcommandOptionResponse[] | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 2;
}
