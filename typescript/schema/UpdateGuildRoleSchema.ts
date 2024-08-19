
export interface UpdateGuildRoleSchema {
    color?: number | null;
    hoist?: boolean | null;
    icon?: string | null;
    mentionable?: boolean | null;
    name?: string | null;
    permissions?: number | null;
    unicode_emoji?: string | null;
}