import { ApplicationCommandAttachmentOption } from './ApplicationCommandAttachmentOption';
import { ApplicationCommandBooleanOption } from './ApplicationCommandBooleanOption';
import { ApplicationCommandChannelOption } from './ApplicationCommandChannelOption';
import { ApplicationCommandIntegerOption } from './ApplicationCommandIntegerOption';
import { ApplicationCommandMentionableOption } from './ApplicationCommandMentionableOption';
import { ApplicationCommandNumberOption } from './ApplicationCommandNumberOption';
import { ApplicationCommandRoleOption } from './ApplicationCommandRoleOption';
import { ApplicationCommandStringOption } from './ApplicationCommandStringOption';
import { ApplicationCommandUserOption } from './ApplicationCommandUserOption';

export type ApplicationCommandSubcommandOption = {
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandUserOption)[] | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}
