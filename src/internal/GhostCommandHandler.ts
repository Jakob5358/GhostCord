import { EventNames } from "../types/GhostEvent";
import { GhostEvent } from "../structures/GhostEvent";
import { GhostClient } from "../structures/GhostClient";

/**
 * GhostCord Command Event Handler
 * @since 1.0.0
 */
export default GhostEvent({
	name: "interactionCreate",
	async run(client: GhostClient, interaction) {
		if (!interaction.isCommand()) return;
		if (!interaction.inCachedGuild()) return client.emit("uncachedGuild", interaction);

		const command = client.commands.get(interaction.commandName);
		if (!command) {
			client.commandEmitter(interaction);
			return;
		}

		try {
			await command.run(interaction, client);
		} catch (err: any) {
			client.emit(EventNames.COMMAND_EXCEPTION, interaction, err);

			if (client.listeners(EventNames.COMMAND_EXCEPTION).length) return;

			await interaction[interaction.deferred ? "editReply" : interaction.replied ? "followUp" : "reply"]({
				content: `❌ ${err}`,
			});
		}
	},
});
