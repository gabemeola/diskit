package main

import (
	"log"
	"os"
	"time"

	"github.com/gabemeola/diskit/gen"
)

var pathToGen = []string{
	"/users/@me/connections",
	// TODO: Support other ops outside of GET
	"/users/@me",
	"/oauth2/applications/@me",
	"/applications/@me",
	"/applications/{application_id}",
	// TODO: Full operations
	// TODO: Support typed path params
	"/applications/{application_id}/guilds/{guild_id}/commands",
	// TODO: Support 201 responses (and any other codes)
	// "/guilds",
	"/gateway/bot",
	"/applications/{application_id}/guilds/{guild_id}/commands/permissions",
	"/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions",
	"/applications/{application_id}/role-connections/metadata",
	"/applications/{application_id}/entitlements/{entitlement_id}/consume",
	"/applications/{application_id}/guilds/{guild_id}/commands/{command_id}",
}

func main() {
	start := time.Now()
	defer func() {
		duration := time.Since(start)
		log.Printf("Generated in %fs", duration.Seconds())
	}()
	file, err := os.ReadFile("openapi.json")
	invariantErr(err, "error reading file")

	gen.GenFromDocument(file)
}

func invariantErr(err error, message string) {
	if err != nil {
		log.Panicf("%s: %s", message, err)
	}
}
