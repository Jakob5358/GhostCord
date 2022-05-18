import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, PermissionResolvable } from "discord.js";
import { GhostClient } from "../structures/GhostClient";

/**
 * The command options
 * @since 1.0.0
 */
export interface GhostCommandOptions {
	/**
	 * The name of the command
	 */
	name: string;
	/**
	 * The description of the command
	 */
	description: string;
	/**
	 * The slash command options
	 */
	options?: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
	/**
	 * Permissions needed for the bot to run the command
	 */
	clientRequiredPermissions?: PermissionResolvable | PermissionResolvable[];
	/**
	 * Permissions needed for the user to run the command
	 */
	userRequiredPermissions?: PermissionResolvable | PermissionResolvable[];
	/**
	 * The command cooldown
	 */
	cooldown?: `${string}${"s" | "m" | "h" | "d" | "w" | "y"}`;
	/**
	 * The command execution logic
	 */
	run: (interaction: CommandInteraction<"cached">, client: GhostClient) => unknown | Promise<unknown>;
}
