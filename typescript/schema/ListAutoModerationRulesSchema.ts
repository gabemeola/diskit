import { DefaultKeywordRuleResponse } from './DefaultKeywordRuleResponse';
import { KeywordRuleResponse } from './KeywordRuleResponse';
import { MLSpamRuleResponse } from './MLSpamRuleResponse';
import { MentionSpamRuleResponse } from './MentionSpamRuleResponse';
import { SpamLinkRuleResponse } from './SpamLinkRuleResponse';

export type ListAutoModerationRulesSchema = (DefaultKeywordRuleResponse | KeywordRuleResponse | MLSpamRuleResponse | MentionSpamRuleResponse | SpamLinkRuleResponse | null)[] | null