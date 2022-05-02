import { EventNames } from "../types/GhostEvent";
import { GhostEvent } from "../structures/GhostEvent";
import { container } from "../structures/GhostContainer";

/**
 * GhostCord Command Event Handler
 * @since 1.0.0
 */
export default GhostEvent({
  name: "interactionCreate",
  async run(client, interaction) {
    if (!interaction.isCommand()) return;
    if (!interaction.inCachedGuild()) return client.emit("uncachedGuild", interaction);

    const command = client.commands.get(interaction.commandName);
    if (!command) return client.emit(EventNames.COMMAND_NOT_FOUND, interaction);

    try {
      // Run preconditions, we can also have plugins like @GhostCord/cooldowns to allow for cooldowns
      if (container.PluginManager.pluginStore.has("cooldown")) {
        await container.PluginManager.pluginStore.get("cooldown")?.run(client, interaction);
      }
      await command.run(interaction, client);
    } catch (err: any) {
      return client.emit(EventNames.COMMAND_EXCEPTION, interaction, err);
    }
  },
});
