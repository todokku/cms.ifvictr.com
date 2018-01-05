const config = require("ghost/core/server/config");
const ghostVersion = require("ghost/core/server/lib/ghost-version");

/**
 * knex-migrator can be used via CLI or within the application
 * when using the CLI, we need to ensure that our global overrides are triggered
 */
require("ghost/core/server/overrides");

module.exports = {
    currentVersion: ghostVersion.safe,
    database: config.get("database"),
    migrationPath: config.get("paths:migrationPath")
};