import { ActionRow } from './ActionRow';
import { MessageAllowedMentionsRequest } from './MessageAllowedMentionsRequest';
import { MessageAttachmentRequest } from './MessageAttachmentRequest';
import { RichEmbed } from './RichEmbed';

export interface IncomingWebhookUpdateRequestPartial {
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    attachments?: MessageAttachmentRequest[] | null;
    components?: ActionRow[] | null;
    content?: string | null;
    embeds?: RichEmbed[] | null;
    flags?: number | null;
}