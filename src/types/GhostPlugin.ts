import { CommandInteraction } from "discord.js";
import { GhostClient } from "../structures/GhostClient";

interface CommandPlugin {
	inject: "CommandFired";
	run: (client: GhostClient, interaction: CommandInteraction<"cached">) => unknown;
}

interface StartPlugin {
	inject: "Initialization";
	run: (client: GhostClient) => unknown;
}

export type GhostPlugin = CommandPlugin | StartPlugin;
