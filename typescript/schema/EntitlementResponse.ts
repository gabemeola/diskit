import { EntitlementTenantFulfillmentStatusResponse } from './EntitlementTenantFulfillmentStatusResponse';
import { EntitlementTypes } from './EntitlementTypes';
import { SnowflakeType } from './SnowflakeType';

export interface EntitlementResponse {
    application_id: SnowflakeType;
    consumed?: boolean | null;
    deleted: boolean;
    /** Format: date-time */
    ends_at?: string | null;
    /** Format: date-time */
    fulfilled_at?: string | null;
    fulfillment_status?: null | EntitlementTenantFulfillmentStatusResponse;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    sku_id: SnowflakeType;
    /** Format: date-time */
    starts_at?: string | null;
    type: EntitlementTypes;
    user_id: SnowflakeType;
}