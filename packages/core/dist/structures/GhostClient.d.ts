import { Client, Collection } from "discord.js";
import { GhostOptions } from "../types/GhostOptions";
import { GhostCommand } from "./GhostCommand";
/**
 * The extended client class for GhostCord.
 * @since 1.0.0
 */
export declare class GhostClient extends Client {
    options: GhostOptions;
    commands: Collection<string, GhostCommand>;
    logger: import("../utils/logger").GhostLogger;
    constructor(options: GhostOptions);
    /**
     * Starts all base instances and utilities.
     * @since 1.0.0
     */
    start(): Promise<void>;
    /**
     * Loads all commands into the client.
     * @since 1.0.0
     */
    private registerCommands;
    /**
     * Registers all events into the client.
     * @since 1.0.0
     */
    private registerEvents;
}
//# sourceMappingURL=GhostClient.d.ts.map