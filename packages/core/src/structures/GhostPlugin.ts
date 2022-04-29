import { GhostPluginType } from "../types/GhostPlugin";

/**
 * The GhostPlugin is a special plugin that is used to store information about each plugin module used in GhostCord.
 * @since 1.0.0
 */
export class GhostPluginManager {
    public activePlugins: Set<string> = new Set();
    /** Cache for plugins added to the manager */
    public plugins: Map<string, GhostPluginType> = new Map()

    public constructor(adaptors?: GhostPluginType[]) {
        if (adaptors) this.loadPlugins()
        else {
            // TODO change to logger plugin
            console.warn("You called the plugin manager but didn't pass any plugins to it!")
        }
    }

    /**
     * Searches for a plugin by name and returns it.
     * @param pluginName name of the plugin
     * @returns {GhostPluginType | null}
     * @since 1.0.0
     */
    public search(pluginName: string): GhostPluginType | null {
        const result = this.plugins.get(pluginName);
        if (!result) return null;
        return result;
    }

    /**
     * Loads all the plugins into cache.
     * @since 1.0.0
     */
    private loadPlugins() {
        for (const plugin of this.plugins.values()) {
            this.activePlugins.add(plugin.name);
        }
    }

    /**
     * Returns all active plugins by name
     * @since 1.0.0
     * @returns {string}
     */
    public get getPlugins() {
        return this.activePlugins;
    }
}