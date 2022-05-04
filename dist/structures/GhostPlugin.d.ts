import { GhostPluginType } from "../types/GhostPlugin";
/**
 * The GhostPlugin is a special plugin that is used to store information about each plugin module used in GhostCord.
 * @since 1.0.0
 */
export declare class GhostPluginManager {
    activePlugins: Set<string>;
    /** Cache for plugins added to the manager */
    pluginStore: Map<string, GhostPluginType>;
    /**
     * @param adaptors Takes an array of adaptors to load into the plugin manager
     */
    constructor(adaptors?: GhostPluginType[]);
    /**
     * Searches for a plugin by name and returns its data.
     * @param pluginName name of the plugin
     * @returns {GhostPluginType | null}
     * @since 1.0.0
     */
    search(pluginName: string): GhostPluginType | null;
    /**
     * Returns all active plugins by name
     * @since 1.0.0
     * @returns {string}
     */
    get getPlugins(): Set<string>;
    /**
     * Loads all the plugins into cache.
     * @since 1.0.0
     */
    private loadPlugins;
}
//# sourceMappingURL=GhostPlugin.d.ts.map