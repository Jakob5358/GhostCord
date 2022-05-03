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
export declare class GhostContainer {
    protected options?: GhostGlobalConfig | undefined;
    /** The internal logger for GhostCord */
    logger: GhostLogger;
    /** The global defaults for the framework configuration */
    readonly defaultConfig: GhostGlobalConfig;
    /** Where the config is stored */
    config: GhostGlobalConfig;
    /**
     * Access to the plugin manager.
     */
    PluginManager: GhostPluginManager;
    constructor(options?: GhostGlobalConfig | undefined);
}
export declare const container: GhostContainer;
/**
 * The global configuration for GhostCord.
 * @since 1.0.0
 */
interface GhostGlobalConfig {
    debug: boolean;
}
export {};
//# sourceMappingURL=GhostContainer.d.ts.map