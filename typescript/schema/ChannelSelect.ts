import { ChannelSelectDefaultValue } from './ChannelSelectDefaultValue';
import { ChannelTypes } from './ChannelTypes';

export interface ChannelSelect {
    channel_types?: ChannelTypes[] | null;
    custom_id: string;
    default_values?: ChannelSelectDefaultValue[] | null;
    disabled?: boolean | null;
    max_values?: number | null;
    min_values?: number | null;
    placeholder?: string | null;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 8;
}