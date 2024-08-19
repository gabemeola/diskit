import { UserResponse } from './UserResponse';

export interface GuildBanResponse {
    reason?: string | null;
    user: UserResponse;
}