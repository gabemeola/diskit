import { BlockMessageActionMetadataResponse } from './BlockMessageActionMetadataResponse';

export interface BlockMessageActionResponse {
    metadata: BlockMessageActionMetadataResponse;
    /**
     * Format: int32
     * @enum {integer}
     */
    type: 1;
}