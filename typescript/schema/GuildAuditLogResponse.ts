import { ApplicationCommandResponse } from './ApplicationCommandResponse';
import { ApplicationIncomingWebhookResponse } from './ApplicationIncomingWebhookResponse';
import { AuditLogEntryResponse } from './AuditLogEntryResponse';
import { ChannelFollowerWebhookResponse } from './ChannelFollowerWebhookResponse';
import { DefaultKeywordRuleResponse } from './DefaultKeywordRuleResponse';
import { ExternalScheduledEventResponse } from './ExternalScheduledEventResponse';
import { GuildIncomingWebhookResponse } from './GuildIncomingWebhookResponse';
import { KeywordRuleResponse } from './KeywordRuleResponse';
import { MLSpamRuleResponse } from './MLSpamRuleResponse';
import { MentionSpamRuleResponse } from './MentionSpamRuleResponse';
import { PartialDiscordIntegrationResponse } from './PartialDiscordIntegrationResponse';
import { PartialExternalConnectionIntegrationResponse } from './PartialExternalConnectionIntegrationResponse';
import { PartialGuildSubscriptionIntegrationResponse } from './PartialGuildSubscriptionIntegrationResponse';
import { SpamLinkRuleResponse } from './SpamLinkRuleResponse';
import { StageScheduledEventResponse } from './StageScheduledEventResponse';
import { ThreadResponse } from './ThreadResponse';
import { UserResponse } from './UserResponse';
import { VoiceScheduledEventResponse } from './VoiceScheduledEventResponse';

export interface GuildAuditLogResponse {
    application_commands: ApplicationCommandResponse[];
    audit_log_entries: AuditLogEntryResponse[];
    auto_moderation_rules: (DefaultKeywordRuleResponse | KeywordRuleResponse | MLSpamRuleResponse | MentionSpamRuleResponse | SpamLinkRuleResponse | null)[];
    guild_scheduled_events: (ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse)[];
    integrations: (PartialDiscordIntegrationResponse | PartialExternalConnectionIntegrationResponse | PartialGuildSubscriptionIntegrationResponse)[];
    threads: ThreadResponse[];
    users: UserResponse[];
    webhooks: (ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse)[];
}