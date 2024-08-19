import { GatewayBotSessionStartLimitResponse } from './GatewayBotSessionStartLimitResponse';

export interface GatewayBotResponse {
    session_start_limit: GatewayBotSessionStartLimitResponse;
    /** Format: int32 */
    shards: number;
    /** Format: uri */
    url: string;
}