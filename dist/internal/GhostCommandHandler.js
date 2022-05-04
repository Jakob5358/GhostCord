"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GhostEvent_1 = require("../types/GhostEvent");
const GhostEvent_2 = require("../structures/GhostEvent");
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
        if (!command) {
            client.commandEmitter(interaction);
            return;
        }
        try {
            await command.run(interaction, client);
        }
        catch (err) {
            client.emit(GhostEvent_1.EventNames.COMMAND_EXCEPTION, interaction, err);
            if (client.listeners(GhostEvent_1.EventNames.COMMAND_EXCEPTION).length)
                return;
            await interaction[interaction.deferred ? "editReply" : interaction.replied ? "followUp" : "reply"]({
                content: `❌ ${err}`,
            });
        }
    },
});
//# sourceMappingURL=GhostCommandHandler.js.map