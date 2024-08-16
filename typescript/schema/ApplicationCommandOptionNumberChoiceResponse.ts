
export interface ApplicationCommandOptionNumberChoiceResponse {
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    name_localized?: string | null;
    /** Format: double */
    value: number;
}
