import { ActionRow } from './ActionRow';
import { MessageAllowedMentionsRequest } from './MessageAllowedMentionsRequest';
import { MessageAttachmentRequest } from './MessageAttachmentRequest';
import { RichEmbed } from './RichEmbed';
import { SnowflakeType } from './SnowflakeType';

export interface MessageEditRequestPartial {
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    attachments?: MessageAttachmentRequest[] | null;
    components?: ActionRow[] | null;
    content?: string | null;
    embeds?: RichEmbed[] | null;
    flags?: number | null;
    sticker_ids?: SnowflakeType[] | null;
}