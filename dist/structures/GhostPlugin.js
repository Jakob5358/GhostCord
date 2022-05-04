"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostPluginManager = void 0;
const GhostContainer_1 = require("./GhostContainer");
/**
 * The GhostPlugin is a special plugin that is used to store information about each plugin module used in GhostCord.
 * @since 1.0.0
 */
class GhostPluginManager {
    activePlugins = new Set();
    /** Cache for plugins added to the manager */
    pluginStore = new Map();
    /**
     * @param adaptors Takes an array of adaptors to load into the plugin manager
     */
    constructor(adaptors) {
        if (adaptors) {
            // we dont need to set the adaptors in the plugin store, as they are already set in the client instance on load
            this.loadPlugins();
        }
        else {
            GhostContainer_1.container.logger.warn("You called the plugin manager but didn't pass any plugins to it!");
        }
    }
    /**
     * Searches for a plugin by name and returns it.
     * @param pluginName name of the plugin
     * @returns {GhostPluginType | null}
     * @since 1.0.0
     */
    search(pluginName) {
        const result = this.pluginStore.get(pluginName);
        if (!result)
            return null;
        return result;
    }
    /**
     * Returns all active plugins by name
     * @since 1.0.0
     * @returns {string}
     */
    get getPlugins() {
        return this.activePlugins;
    }
    /**
     * Loads all the plugins into cache.
     * @since 1.0.0
     */
    loadPlugins() {
        for (const plugin of this.pluginStore.values()) {
            this.activePlugins.add(plugin.name);
        }
    }
}
exports.GhostPluginManager = GhostPluginManager;
//# sourceMappingURL=GhostPlugin.js.map