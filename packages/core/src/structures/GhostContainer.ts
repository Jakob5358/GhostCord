import { GhostLogger } from "../utils/logger";
import { GhostPluginManager } from "./GhostPlugin";

/**
 * Container for the a ghost component.
 * Can be extended to add more functionality.
 * @since 1.0.0
 */
export interface GhostContainer {
  logger: GhostLogger;
  ghostConfig: GhostGlobalConfig;
}

/**
 * Container Object for GhostCord.
 * This can be used to access the logger, plugins, etc outside of the core framework.
 *
 * @since 1.0.0
 */
export class GhostContainer {
  /** The internal logger for GhostCord */
  public logger: GhostLogger = new GhostLogger();
  /** The global defaults for the framework configuration */
  public readonly defaultConfig: GhostGlobalConfig = {
    debug: false,
  }
  /** Where the config is stored */
  public config: GhostGlobalConfig = {
    ...this.defaultConfig,
  }
  /**
   * Access to the plugin manager.
   */
  public PluginManager: GhostPluginManager = new GhostPluginManager();

  public constructor(protected options?: GhostGlobalConfig) {
    if (options) {
      this.config = {
        ...options,
      };
    }
  }
}

export const container = new GhostContainer();

/**
 * The global configuration for GhostCord.
 * @since 1.0.0
 */
interface GhostGlobalConfig {
  debug: boolean;
}