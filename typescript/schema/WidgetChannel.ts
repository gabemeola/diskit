import { SnowflakeType } from './SnowflakeType';

export interface WidgetChannel {
    id: SnowflakeType;
    name: string;
    /** Format: int32 */
    position: number;
}