import { ClientOptions } from "discord.js";
import { GhostPluginType } from "./GhostPlugin";

/**
 * The extended client options.
 * @since 1.0.0
 */
export interface GhostOptions extends ClientOptions {
  token: string;
  pluginPattern: string;
  commandPattern: string;
  eventPattern: string;
  plugins?: GhostPluginType[];
  /** If debug mode should be enabled for the framework. */
  debug?: boolean;
}
