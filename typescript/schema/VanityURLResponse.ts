import { VanityURLErrorResponse } from './VanityURLErrorResponse';

export interface VanityURLResponse {
    code?: string | null;
    error?: null | VanityURLErrorResponse;
    /** Format: int32 */
    uses: number;
}