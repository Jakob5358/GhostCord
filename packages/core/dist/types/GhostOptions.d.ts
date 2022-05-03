import { ClientOptions } from "discord.js";
import { GhostPluginType } from "./GhostPlugin";
/**
 * The extended client options.
 * @since 1.0.0
 */
export interface GhostOptions extends ClientOptions {
    token: string;
    pluginPattern: string;
    /**
     * The path to your commands dir.
     */
    commandPattern: string;
    /**
     * The path to your events dir.
     */
    eventPattern: string;
    plugins?: GhostPluginType[];
    /** If debug mode should be enabled for the framework. */
    debug?: boolean;
}
//# sourceMappingURL=GhostOptions.d.ts.map