import { ApplicationCommandAttachmentOption } from './ApplicationCommandAttachmentOption';
import { ApplicationCommandBooleanOption } from './ApplicationCommandBooleanOption';
import { ApplicationCommandChannelOption } from './ApplicationCommandChannelOption';
import { ApplicationCommandIntegerOption } from './ApplicationCommandIntegerOption';
import { ApplicationCommandMentionableOption } from './ApplicationCommandMentionableOption';
import { ApplicationCommandNumberOption } from './ApplicationCommandNumberOption';
import { ApplicationCommandRoleOption } from './ApplicationCommandRoleOption';
import { ApplicationCommandStringOption } from './ApplicationCommandStringOption';
import { ApplicationCommandSubcommandGroupOption } from './ApplicationCommandSubcommandGroupOption';
import { ApplicationCommandSubcommandOption } from './ApplicationCommandSubcommandOption';
import { ApplicationCommandUserOption } from './ApplicationCommandUserOption';

export interface ApplicationCommandPatchRequestPartial {
    default_member_permissions?: number | null;
    description?: string | null;
    description_localizations?: {
        [key: string]: string;
    } | null;
    dm_permission?: boolean | null;
    name?: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
}
