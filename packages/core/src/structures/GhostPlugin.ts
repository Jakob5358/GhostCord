import { GhostPluginType } from "../types/GhostPlugin";
import { container } from "./GhostContainer";

/**
 * The GhostPlugin is a special plugin that is used to store information about each plugin module used in GhostCord.
 * @since 1.0.0
 */
export class GhostPluginManager {
  public activePlugins: Set<string> = new Set();
  /** Cache for plugins added to the manager */
  public pluginStore: Map<string, GhostPluginType> = new Map();
  /**
   * @param adaptors Takes an array of adaptors to load into the plugin manager
   */
  public constructor(adaptors?: GhostPluginType[]) {
    if (adaptors) {
      // Loads all plugins into the cache
      for (const plugin of adaptors.values()) {
        this.pluginStore.set(plugin.name, plugin);
        container.logger.debug(`Loaded plugin ${plugin.name}`);
      }
      this.loadPlugins();
    } else {
      container.logger.warn("You called the plugin manager but didn't pass any plugins to it!");
    }
  }

  /**
   * Searches for a plugin by name and returns it.
   * @param pluginName name of the plugin
   * @returns {GhostPluginType | null}
   * @since 1.0.0
   */
  public search(pluginName: string): GhostPluginType | null {
    const result = this.pluginStore.get(pluginName);
    if (!result) return null;
    return result;
  }
  /**
   * Returns all active plugins by name
   * @since 1.0.0
   * @returns {string}
   */
  public get getPlugins() {
    return this.activePlugins;
  }

  /**
   * Loads all the plugins into cache.
   * @since 1.0.0
   */
  private loadPlugins() {
    for (const plugin of this.pluginStore.values()) {
      this.activePlugins.add(plugin.name);
    }
  }
}
