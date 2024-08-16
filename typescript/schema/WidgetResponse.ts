import { SnowflakeType } from './SnowflakeType';
import { WidgetChannel } from './WidgetChannel';
import { WidgetMember } from './WidgetMember';

export interface WidgetResponse {
    channels: WidgetChannel[];
    id: SnowflakeType;
    instant_invite?: string | null;
    members: WidgetMember[];
    name: string;
    /** Format: int32 */
    presence_count: number;
}