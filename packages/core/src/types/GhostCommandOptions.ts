import { CommandInteraction } from "discord.js";
import { GhostClient } from "../structures/GhostClient";

/**
 * The command options
 * @since 1.0.0
 */
export interface GhostCommandOptions {
  name: string;
  description: string;
  run: (interaction: CommandInteraction<"cached">, client: GhostClient) => unknown;
}
