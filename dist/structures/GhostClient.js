"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostClient = void 0;
const discord_js_1 = require("discord.js");
const GhostEvent_1 = require("../types/GhostEvent");
const GhostContainer_1 = require("./GhostContainer");
/**
 * The extended client class for GhostCord.
 * @since 1.0.0
 */
class GhostClient extends discord_js_1.Client {
    options;
    commands = new discord_js_1.Collection();
    constructor(options) {
        super(options);
        this.options = options;
        if (options.plugins) {
            for (const plugin of options.plugins) {
                GhostContainer_1.container.PluginManager.pluginStore.set(plugin.name, plugin);
            }
            GhostContainer_1.container.logger.debug("Loaded plugins into the plugin manager");
        }
    }
    /**
     * Starts all base instances and utilities.
     * @since 1.0.0
     */
    async start() {
        await this.registerCommands();
        await this.registerEvents();
        await this.login(this.options.token);
    }
    /**
     * Loads all commands into the client.
     * @since 1.0.0
     */
    async registerCommands() {
        for await (const path of this.options.commands) {
            const file = await Promise.resolve().then(() => __importStar(require(path)));
            const command = file.default;
            let name = command.name.toLocaleLowerCase();
            // check if name is over 25 characters
            if (name.length > 25) {
                name = name.substring(0, 25);
                GhostContainer_1.container.logger.warn(`Command ${command.name} is over 25 characters, truncated to ${name}`);
            }
            this.commands.set(name, command);
            this.emit(GhostEvent_1.EventNames.COMMAND_LOADED, command);
        }
    }
    /**
     * Registers all events into the client.
     * @since 1.0.0
     */
    async registerEvents() {
        for await (const path of this.options.events) {
            const file = await Promise.resolve().then(() => __importStar(require(path)));
            const event = file.default;
            if (!event || !event.name || !event.run) {
                GhostContainer_1.container.logger.warn(`Event at ${path} doesn\'t seem to be correctly exporting an event`);
                continue;
            }
            this[event.once ? "once" : "on"](event.name, (...args) => void event.run(this, ...args));
            this.emit(GhostEvent_1.EventNames.EVENT_LOADED, event);
        }
    }
    /**
     * Emits an event based on the interaction.
     * @param interaction The command interaction to emit.
     */
    commandEmitter(interaction) {
        this.on(GhostEvent_1.EventNames.COMMAND_NOT_FOUND, () => {
            GhostContainer_1.container.logger.debug(`Command ${interaction.commandName} (${interaction.commandId}) not found`);
        });
        this.emit(GhostEvent_1.EventNames.COMMAND_NOT_FOUND, interaction);
    }
}
exports.GhostClient = GhostClient;
//# sourceMappingURL=GhostClient.js.map