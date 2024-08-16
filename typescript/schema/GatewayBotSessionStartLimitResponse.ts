
export type GatewayBotSessionStartLimitResponse = {
    /** Format: int32 */
    max_concurrency: number;
    /** Format: int32 */
    remaining: number;
    /** Format: int32 */
    reset_after: number;
    /** Format: int32 */
    total: number;
}
