import { MetadataItemTypes } from './MetadataItemTypes';

export interface ApplicationRoleConnectionsMetadataItemResponse {
    description: string;
    description_localizations?: {
        [key: string]: string;
    } | null;
    key: string;
    name: string;
    name_localizations?: {
        [key: string]: string;
    } | null;
    type: MetadataItemTypes;
}
