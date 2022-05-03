import { CommandInteraction } from "discord.js";
import { GhostClient } from "../structures/GhostClient";
export interface GhostPluginType {
    name: string;
    run: (client: GhostClient, interaction: CommandInteraction) => Promise<unknown> | unknown;
}
//# sourceMappingURL=GhostPlugin.d.ts.map