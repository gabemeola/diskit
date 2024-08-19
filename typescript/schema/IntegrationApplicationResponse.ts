import { ApplicationTypes } from './ApplicationTypes';
import { SnowflakeType } from './SnowflakeType';
import { UserResponse } from './UserResponse';

export interface IntegrationApplicationResponse {
    bot?: null | UserResponse;
    cover_image?: string | null;
    description: string;
    icon?: string | null;
    id: SnowflakeType;
    name: string;
    primary_sku_id?: null | SnowflakeType;
    type?: null | ApplicationTypes;
}