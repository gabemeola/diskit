import { ApplicationCommandUserOptionResponse } from './ApplicationCommandUserOptionResponse';
import { ApplicationCommandBooleanOptionResponse } from './ApplicationCommandBooleanOptionResponse';
import { ApplicationCommandChannelOptionResponse } from './ApplicationCommandChannelOptionResponse';
import { ApplicationCommandIntegerOptionResponse } from './ApplicationCommandIntegerOptionResponse';
import { ApplicationCommandMentionableOptionResponse } from './ApplicationCommandMentionableOptionResponse';
import { ApplicationCommandRoleOptionResponse } from './ApplicationCommandRoleOptionResponse';
import { ApplicationCommandStringOptionResponse } from './ApplicationCommandStringOptionResponse';
import { ApplicationCommandAttachmentOptionResponse } from './ApplicationCommandAttachmentOptionResponse';
import { ApplicationCommandNumberOptionResponse } from './ApplicationCommandNumberOptionResponse';

export type ApplicationCommandSubcommandOptionResponse = {
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
    options?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandUserOptionResponse)[] | null;
    required?: boolean | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}
