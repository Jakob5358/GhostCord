"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.GhostContainer = void 0;
const logger_1 = require("../utils/logger");
const GhostPlugin_1 = require("./GhostPlugin");
/**
 * Container Object for GhostCord.
 * This can be used to access the logger, plugins, etc outside of the core framework.
 *
 * @since 1.0.0
 */
class GhostContainer {
    options;
    /** The internal logger for GhostCord */
    logger = new logger_1.GhostLogger();
    /** The global defaults for the framework configuration */
    defaultConfig = {
        debug: false,
    };
    /** Where the config is stored */
    config = {
        ...this.defaultConfig,
    };
    /**
     * Access to the plugin manager.
     */
    PluginManager = new GhostPlugin_1.GhostPluginManager();
    constructor(options) {
        this.options = options;
        if (options) {
            this.config = {
                ...options,
            };
        }
    }
}
exports.GhostContainer = GhostContainer;
exports.container = new GhostContainer();
//# sourceMappingURL=GhostContainer.js.map