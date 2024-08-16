import { ExternalScheduledEventResponse } from './ExternalScheduledEventResponse';
import { StageScheduledEventResponse } from './StageScheduledEventResponse';
import { VoiceScheduledEventResponse } from './VoiceScheduledEventResponse';

export type ListGuildScheduledEventsSchema = (ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse)[] | null