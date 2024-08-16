import { SnowflakeType } from './SnowflakeType';

export interface WelcomeMessageResponse {
    author_ids: SnowflakeType[];
    message: string;
}