
export interface ApplicationCommandOptionNumberChoice {
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    /** Format: double */
    value: number;
}