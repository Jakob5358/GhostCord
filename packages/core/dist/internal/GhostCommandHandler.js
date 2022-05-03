"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GhostEvent_1 = require("../types/GhostEvent");
const GhostEvent_2 = require("../structures/GhostEvent");
const GhostContainer_1 = require("../structures/GhostContainer");
/**
 * GhostCord Command Event Handler
 * @since 1.0.0
 */
exports.default = (0, GhostEvent_2.GhostEvent)({
    name: "interactionCreate",
    async run(client, interaction) {
        if (!interaction.isCommand())
            return;
        if (!interaction.inCachedGuild())
            return client.emit("uncachedGuild", interaction);
        const command = client.commands.get(interaction.commandName);
        if (!command)
            return client.emit(GhostEvent_1.EventNames.COMMAND_NOT_FOUND, interaction);
        try {
            // Run preconditions, we can also have plugins like @GhostCord/cooldowns to allow for cooldowns
            if (GhostContainer_1.container.PluginManager.pluginStore.has("cooldown")) {
                await GhostContainer_1.container.PluginManager.pluginStore.get("cooldown")?.run(client, interaction);
            }
            await command.run(interaction, client);
        }
        catch (err) {
            return client.emit(GhostEvent_1.EventNames.COMMAND_EXCEPTION, interaction, err);
        }
    },
});
//# sourceMappingURL=GhostCommandHandler.js.map