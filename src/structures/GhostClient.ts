import { Client, Collection } from "discord.js";
import { GhostOptions } from "../types/GhostOptions";
import { GhostCommand } from "./GhostCommand";
import { GhostListener } from "../types/GhostListener";
import { container } from "./GhostContainer";
import { GhostMetadataKeys } from "./GhostMetadata";
import { Cog } from "../types/GhostCog";
import { GhostCommandOptions } from "../types/GhostCommandOptions";
import { GhostPlugin } from "../types/GhostPlugin";

/**
 * The extended client class for GhostCord.
 * @since 1.0.0
 */
export class GhostClient extends Client<true> {
	private cogs = new Collection<string, Cog>();

	public constructor(public options: GhostOptions) {
		super(options);
		if (options.plugins) {
			container.plugins = options.plugins;
			container.logger.debug("Loaded plugins into the plugin manager");
		}
		this.initControllers();
	}

	public use(plugin: GhostPlugin) {
		container.plugins.push(plugin);
	}

	public getCommand(name: string) {
		return (
			this.cogs
				.filter((cog) => cog.active)
				.map((cog) => cog.commands)
				.flat()
				.find((command) => command.name === name) ?? null
		);
	}

	/**
	 * Starts the bot client, loads all commands, events, and plugins then connects us with the Discord API.
	 * @param noLogin If true, the bot will not login to the Discord API. This is useful if you wish to login from another place in your code.
	 * @default false
	 * @since 1.0.0
	 */
	public async start(noLogin = false) {
		if (noLogin === false) {
			await this.login(this.options.token);
		} else {
			container.logger.debug("No login was specified, skipping login!");
		}
	}

	private initControllers() {
		this.options.controllers.forEach((Controller) => {
			const controller = container.services.get(Controller);
			const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(controller));

			const commands: GhostCommand[] = [];
			const listeners: GhostListener[] = [];

			methods.forEach((method) => {
				const getMetadata = (key: GhostMetadataKeys) => Reflect.getMetadata(key, controller, method);

				const command: GhostCommandOptions = getMetadata(GhostMetadataKeys.Command);
				if (command) {
					if (command.name.length > 25) {
						command.name = command.name.substring(0, 25);
						container.logger.warn(`Command ${command.name} is over 25 characters, truncated to ${name}`);
					}

					commands.push(new GhostCommand(command));
				}
				const listener: GhostListener = getMetadata(GhostMetadataKeys.Command);
				if (listener) {
					listeners.push(listener);
				}
			});

			this.cogs.set(controller.name, {
				commands,
				listeners,
				active: true,
			});
		});
	}

	public load(name: string) {
		const cog = this.cogs.get(name);
		if (!cog) throw new Error(`Cog ${name} not found`);

		cog.listeners.forEach((listener) =>
			this[listener.once ? "once" : "on"](listener.event, (...args) => void listener.run([this, ...args]))
		);

		this.cogs.set(name, {
			...this.cogs.get(name)!,
			active: true,
		});
	}

	public unload(name: string) {
		if (!this.cogs.has(name)) throw new Error(`Cog ${name} not found`);
		this.cogs.set(name, {
			...this.cogs.get(name)!,
			active: false,
		});
	}
}
