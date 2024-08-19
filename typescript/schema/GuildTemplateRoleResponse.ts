
export interface GuildTemplateRoleResponse {
    /** Format: int32 */
    color: number;
    hoist: boolean;
    icon?: string | null;
    /** Format: int32 */
    id: number;
    mentionable: boolean;
    name: string;
    permissions: string;
    unicode_emoji?: string | null;
}