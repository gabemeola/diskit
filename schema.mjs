export const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "Discord HTTP API (Preview)",
    "description": "Preview of the Discord v10 HTTP API specification. See https://discord.com/developers/docs for more details.",
    "termsOfService": "https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service",
    "license": {
      "name": "MIT",
      "identifier": "MIT"
    },
    "version": "10"
  },
  "externalDocs": {
    "url": "https://discord.com/developers/docs",
    "description": "Discord Developer Documentation"
  },
  "servers": [
    {
      "url": "https://discord.com/api/v10"
    }
  ],
  components: {
    schemas: {
      // "SnowflakeType": {
      //   "type": "string",
      //   "pattern": "^(0|[1-9][0-9]*)$",
      //   "format": "snowflake"
      // },
      // "ApplicationTypes": {
      //   "type": "integer",
      //   "oneOf": [
      //     {
      //       "title": "GUILD_ROLE_SUBSCRIPTIONS",
      //       "const": 4
      //     }
      //   ],
      //   "format": "int32"
      // },
      "UserResponse": {
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/SnowflakeType"
          },
          "username": {
            "type": "string"
          },
          "avatar": {
            "type": [
              "string",
              "null"
            ]
          },
          "discriminator": {
            "type": "string"
          },
          "public_flags": {
            "type": "integer",
            "format": "int32"
          },
          "flags": {
            "$ref": "#/components/schemas/Int53Type"
          },
          "bot": {
            "type": [
              "boolean",
              "null"
            ]
          },
          "system": {
            "type": [
              "boolean",
              "null"
            ]
          },
          "banner": {
            "type": [
              "string",
              "null"
            ]
          },
          "accent_color": {
            "type": [
              "integer",
              "null"
            ],
            "format": "int32"
          },
          "global_name": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "id",
          "username",
          "discriminator",
          "public_flags",
          "flags"
        ]
      },
      "PrivateApplicationResponse": {
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/SnowflakeType"
          },
          "name": {
            "type": "string"
          },
          "icon": {
            "type": [
              "string",
              "null"
            ]
          },
          "description": {
            "type": "string"
          },
          "type": {
            "oneOf": [
              {
                "type": "null"
              },
              {
                "$ref": "#/components/schemas/ApplicationTypes"
              }
            ]
          },
          "cover_image": {
            "type": [
              "string",
              "null"
            ]
          },
          "primary_sku_id": {
            "oneOf": [
              {
                "type": "null"
              },
              {
                "$ref": "#/components/schemas/SnowflakeType"
              }
            ]
          },
          "bot": {
            "oneOf": [
              {
                "type": "null"
              },
              {
                "$ref": "#/components/schemas/UserResponse"
              }
            ]
          },
          "slug": {
            "type": [
              "string",
              "null"
            ]
          },
          "guild_id": {
            "oneOf": [
              {
                "type": "null"
              },
              {
                "$ref": "#/components/schemas/SnowflakeType"
              }
            ]
          },
          "rpc_origins": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "bot_public": {
            "type": [
              "boolean",
              "null"
            ]
          },
          "bot_require_code_grant": {
            "type": [
              "boolean",
              "null"
            ]
          },
          "terms_of_service_url": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          "privacy_policy_url": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          "custom_install_url": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          // "install_params": {
          //   "oneOf": [
          //     {
          //       "type": "null"
          //     },
          //     {
          //       "$ref": "#/components/schemas/ApplicationOAuth2InstallParamsResponse"
          //     }
          //   ]
          // },
          "verify_key": {
            "type": "string"
          },
          "flags": {
            "type": "integer",
            "format": "int32"
          },
          "max_participants": {
            "type": [
              "integer",
              "null"
            ],
            "format": "int32"
          },
          "tags": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "string"
            },
            "uniqueItems": true
          },
          "redirect_uris": {
            "type": "array",
            "items": {
              "type": [
                "string",
                "null"
              ],
              "format": "uri"
            }
          },
          "interactions_endpoint_url": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          "role_connections_verification_url": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          // "owner": {
          //   "$ref": "#/components/schemas/UserResponse"
          // },
          "approximate_guild_count": {
            "type": [
              "integer",
              "null"
            ],
            "format": "int32"
          },
          // "team": {
          //   "oneOf": [
          //     {
          //       "type": "null"
          //     },
          //     {
          //       "$ref": "#/components/schemas/TeamResponse"
          //     }
          //   ]
          // }
        },
        "required": [
          "id",
          "name",
          "description",
          "verify_key",
          "flags",
          "redirect_uris",
          // "owner"
        ]
      }
    }
  }
}