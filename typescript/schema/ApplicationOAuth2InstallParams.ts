
export interface ApplicationOAuth2InstallParams {
    permissions?: number | null;
    scopes?: ("applications.commands" | "bot")[] | null;
}