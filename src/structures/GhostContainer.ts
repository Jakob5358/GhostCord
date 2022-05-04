import type { GhostGlobalConfig } from "../types/GhostContainer";
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
 * @since 1.0.0
 */
export const container: GhostContainer = {
	logger: new GhostLogger(),
	config: function (options) {
		if (!options) {
			return this.defaultConfig;
		} else {
			return options;
		}
	},
	PluginManager: new GhostPluginManager(),
	defaultConfig: {
		debug: false,
	},
};
