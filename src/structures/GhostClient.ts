import { Client, Collection, CommandInteraction } from "discord.js";
import { GhostOptions } from "../types/GhostOptions";
import { GhostCommand } from "./GhostCommand";
import { GhostEventType } from "../types/GhostEvent";
import { EventNames } from "../types/GhostEvent";
import { container } from "./GhostContainer";

/**
 * The extended client class for GhostCord.
 * @since 1.0.0
 */
export class GhostClient extends Client {
	public commands = new Collection<string, GhostCommand>();
	public constructor(public options: GhostOptions) {
		super(options);
		if (options.plugins) {
			for (const plugin of options.plugins) {
				container.PluginManager.pluginStore.set(plugin.name, plugin);
			}
			container.logger.debug("Loaded plugins into the plugin manager");
		}
	}

	/**
	 * Starts all base instances and utilities.
	 * @since 1.0.0
	 */
	public async start() {
		await this.registerCommands();
		await this.registerEvents();
		await this.login(this.options.token);
	}

	/**
	 * Loads all commands into the client.
	 * @since 1.0.0
	 */
	private async registerCommands() {
		for await (const path of this.options.commands) {
			const file = await import(path);
			const command: GhostCommand = file.default;

			let name: string = command.name.toLocaleLowerCase();

			// check if name is over 25 characters
			if (name.length > 25) {
				name = name.substring(0, 25);
				container.logger.warn(`Command ${command.name} is over 25 characters, truncated to ${name}`);
			}

			this.commands.set(name, command);
			this.emit(EventNames.COMMAND_LOADED, command);
		}
	}

	/**
	 * Registers all events into the client.
	 * @since 1.0.0
	 */
	public async registerEvents() {
		for await (const path of this.options.events) {
			const file = await import(path);
			const event: GhostEventType<any> = file.default;

			if (!event || !event.name || !event.run) {
				container.logger.warn(`Event at ${path} doesn\'t seem to be correctly exporting an event`);
				continue;
			}

			this[event.once ? "once" : "on"](event.name, (...args: any[]) => void event.run(this, ...args));
			this.emit(EventNames.EVENT_LOADED, event);
		}
	}
}
