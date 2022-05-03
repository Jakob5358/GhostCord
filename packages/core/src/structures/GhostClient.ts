import { Client, Collection } from "discord.js";
import { GhostOptions } from "../types/GhostOptions";
import { GhostCommand } from "./GhostCommand";
import { GhostEventType } from "../types/GhostEvent";
import { search } from "../utils/glob";
import { EventNames } from "../types/GhostEvent";
import { container } from "./GhostContainer";

/**
 * The extended client class for GhostCord.
 * @since 1.0.0
 */
export class GhostClient extends Client {
  public commands = new Collection<string, GhostCommand>();
  public logger = container.logger
  public constructor(public options: GhostOptions) {
    super(options);
    if (options.plugins) {
      for (const plugin of options.plugins) {
        container.PluginManager.pluginStore.set(plugin.name, plugin);
      }
      this.logger.debug("Loaded plugins into the plugin manager");
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
    const filePaths = await search(this.options.commandPattern);
    for await (const path of filePaths) {
      const file = await import(path);
      const command: GhostCommand = file.default;

      this.commands.set(command.name, command);
      this.emit(EventNames.COMMAND_LOADED, command);
    }
  }

  /**
   * Registers all events into the client.
   * @since 1.0.0
   */
  private async registerEvents() {
    const filePaths = await search(this.options.eventPattern);
    for await (const path of filePaths) {
      const file = await import(path);
      const event: GhostEventType<any> = file.default;

      this[event.once ? "once" : "on"](event.name, (...args: any[]) => void event.run(this, ...args));
      this.emit(EventNames.EVENT_LOADED, event);
    }
  }
}
