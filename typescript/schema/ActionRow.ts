import { Button } from './Button';
import { ChannelSelect } from './ChannelSelect';
import { InputText } from './InputText';
import { MentionableSelect } from './MentionableSelect';
import { RoleSelect } from './RoleSelect';
import { StringSelect } from './StringSelect';
import { UserSelect } from './UserSelect';

export interface ActionRow {
    components: (Button | ChannelSelect | InputText | MentionableSelect | RoleSelect | StringSelect | UserSelect)[];
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}