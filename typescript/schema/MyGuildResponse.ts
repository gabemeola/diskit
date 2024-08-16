import { GuildFeatures } from './GuildFeatures';
import { SnowflakeType } from './SnowflakeType';

export interface MyGuildResponse {
    /** Format: int32 */
    approximate_member_count?: number | null;
    /** Format: int32 */
    approximate_presence_count?: number | null;
    banner?: string | null;
    features: GuildFeatures[];
    icon?: string | null;
    id: SnowflakeType;
    name: string;
    owner: boolean;
    permissions: string;
}