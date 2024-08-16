import { ApplicationCommandChannelOptionResponse } from './ApplicationCommandChannelOptionResponse';
import { ApplicationCommandIntegerOptionResponse } from './ApplicationCommandIntegerOptionResponse';
import { ApplicationCommandMentionableOptionResponse } from './ApplicationCommandMentionableOptionResponse';
import { ApplicationCommandRoleOptionResponse } from './ApplicationCommandRoleOptionResponse';
import { ApplicationCommandSubcommandGroupOptionResponse } from './ApplicationCommandSubcommandGroupOptionResponse';
import { ApplicationCommandAttachmentOptionResponse } from './ApplicationCommandAttachmentOptionResponse';
import { ApplicationCommandBooleanOptionResponse } from './ApplicationCommandBooleanOptionResponse';
import { ApplicationCommandNumberOptionResponse } from './ApplicationCommandNumberOptionResponse';
import { ApplicationCommandStringOptionResponse } from './ApplicationCommandStringOptionResponse';
import { ApplicationCommandSubcommandOptionResponse } from './ApplicationCommandSubcommandOptionResponse';
import { ApplicationCommandUserOptionResponse } from './ApplicationCommandUserOptionResponse';
import { ApplicationCommandType } from './ApplicationCommandType';
import { SnowflakeType } from './SnowflakeType';

export type ApplicationCommandResponse = {
    application_id: SnowflakeType;
    default_member_permissions?: string | null;
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    description_localized?: string | null;
    dm_permission?: boolean | null;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    name_localized?: string | null;
    nsfw?: boolean | null;
    options?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandSubcommandGroupOptionResponse | ApplicationCommandSubcommandOptionResponse | ApplicationCommandUserOptionResponse)[] | null;
    type: ApplicationCommandType;
    version: SnowflakeType;
}
