
export interface ApplicationOAuth2InstallParamsResponse {
    permissions: string;
    scopes: ("applications.commands" | "bot")[];
}