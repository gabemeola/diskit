import { Int53Type } from './Int53Type';

export type ApplicationCommandOptionIntegerChoice = {
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    value: Int53Type;
}
