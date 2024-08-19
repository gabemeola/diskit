import { QuarantineUserActionMetadataResponse } from './QuarantineUserActionMetadataResponse';

export interface QuarantineUserActionResponse {
    metadata: QuarantineUserActionMetadataResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 4;
}