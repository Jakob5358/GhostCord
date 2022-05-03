import { GhostCommandOptions } from "../types/GhostCommandOptions";
/**
 * The base command class
 * @since 1.0.0
 */
export declare class GhostCommand {
    protected options: GhostCommandOptions;
    constructor(options: GhostCommandOptions);
    get name(): string;
    get description(): string;
    get run(): (interaction: import("discord.js").CommandInteraction<"cached">, client: import("./GhostClient").GhostClient) => unknown;
}
//# sourceMappingURL=GhostCommand.d.ts.map