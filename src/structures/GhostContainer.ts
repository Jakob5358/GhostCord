import ServiceContainer from "typedi";
import type { GhostGlobalConfig } from "../types/GhostContainer";
import { GhostPlugin } from "../types/GhostPlugin";
import { GhostLogger } from "../utils/logger";

/**
 * Container for the a ghost component.
 * Can be extended to add more functionality.
 * @since 1.0.0
 */
export interface GhostContainer {
	logger: GhostLogger;
	plugins: GhostPlugin[];
	config: (options?: Partial<GhostGlobalConfig>) => GhostGlobalConfig;
	defaultConfig: GhostGlobalConfig;
	services: typeof ServiceContainer;
}

/**
 * Container Object for GhostCord.
 * This can be used to access the logger, plugins, etc outside of the core framework.
 * @since 1.0.0
 */
export const container: GhostContainer = {
	logger: new GhostLogger(),
	config(options) {
		return { ...this.defaultConfig, ...options };
	},
	plugins: [],
	defaultConfig: {
		debug: false,
	},
	services: ServiceContainer,
};
