import { ClientOptions } from "discord.js";
import { Constructable } from "typedi";
import { GhostPlugin } from "./GhostPlugin";
/**
 * The extended client options.
 * @since 1.0.0
 */
export interface GhostOptions extends ClientOptions {
	token: string;
	controllers: Constructable<any>[];
	plugins?: GhostPlugin[];
	/** If debug mode should be enabled for the framework. */
	debug?: boolean;
}
