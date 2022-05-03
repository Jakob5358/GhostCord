import { GhostCommandOptions } from "../types/GhostCommandOptions";
/**
 * The base command class
 * @since 1.0.0
 */
export declare class GhostCommand {
    protected options: GhostCommandOptions;
    private cooldownHandler;
    constructor(options: GhostCommandOptions);
    get name(): string;
    get description(): string;
    get clientRequiredPermissions(): import("discord.js").PermissionResolvable | import("discord.js").PermissionResolvable[] | undefined;
    get userRequiredPermissions(): import("discord.js").PermissionResolvable | import("discord.js").PermissionResolvable[] | undefined;
    get cooldown(): string | undefined;
    get run(): (interaction: import("discord.js").CommandInteraction<"cached">, client: import("./GhostClient").GhostClient) => unknown;
}
//# sourceMappingURL=GhostCommand.d.ts.map