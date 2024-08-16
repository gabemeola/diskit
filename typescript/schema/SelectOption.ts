import { Emoji } from './Emoji';

export interface SelectOption {
    default?: boolean | null;
    description?: string | null;
    emoji?: null | Emoji;
    label: string;
    value: string;
}