import { GhostLogger } from "../utils/logger";
import { GhostPluginManager } from "./GhostPlugin";
/**
 * Container for the a ghost component.
 * Can be extended to add more functionality.
 * @since 1.0.0
 */
export interface GhostContainer {
    logger: GhostLogger;
    PluginManager: GhostPluginManager;
    config: (options?: GhostGlobalConfig) => GhostGlobalConfig;
    defaultConfig: GhostGlobalConfig;
}
/**
 * Container Object for GhostCord.
 * This can be used to access the logger, plugins, etc outside of the core framework.
 *
 * @since 1.0.0
 */
export declare const container: GhostContainer;
/**
 * The global configuration for GhostCord.
 * @since 1.0.0
 */
interface GhostGlobalConfig {
    /**
     * If debug mode is enabled.
     * @default false
     * @since 1.0.0
     */
    debug?: boolean;
    /**
     * An Array of Id's which have access to the bot's owner permission level.
     * @since 1.0.0
     */
    bot_owners?: Array<string>;
    /**
     * An Array of Id's which have access to the bot's admin permission level.
     * @since 1.0.0
     **/
    bot_supporters?: Array<string>;
    /**
     * An Array of Id's which bypass the cooldown inhibitor.
     */
    bot_cooldown_bypass?: {
        users: Array<string>;
        roles: Array<string>;
        channels: Array<string>;
    };
}
export {};
//# sourceMappingURL=GhostContainer.d.ts.map