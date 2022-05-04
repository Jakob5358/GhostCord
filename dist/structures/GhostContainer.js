"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const logger_1 = require("../utils/logger");
const GhostPlugin_1 = require("./GhostPlugin");
/**
 * Container Object for GhostCord.
 * This can be used to access the logger, plugins, etc outside of the core framework.
 *
 * @since 1.0.0
 */
exports.container = {
    logger: new logger_1.GhostLogger(),
    config: function (options) {
        if (!options) {
            return this.defaultConfig;
        }
        else {
            return options;
        }
    },
    PluginManager: new GhostPlugin_1.GhostPluginManager(),
    defaultConfig: {
        debug: false,
    },
};
//# sourceMappingURL=GhostContainer.js.map