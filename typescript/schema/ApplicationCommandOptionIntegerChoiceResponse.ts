import { Int53Type } from './Int53Type';

export type ApplicationCommandOptionIntegerChoiceResponse = {
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    name_localized?: string | null;
    value: Int53Type;
}
