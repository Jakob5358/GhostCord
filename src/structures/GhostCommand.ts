import { GhostCooldownHandler } from "../internal/GhostCooldownHandler";
import { GhostCommandOptions } from "../types/GhostCommandOptions";

/**
 * The base command class
 * @since 1.0.0
 */
export class GhostCommand {
	private cooldownHandler = new GhostCooldownHandler(this);
	public constructor(protected options: GhostCommandOptions) {}

	public get name() {
		return this.options.name;
	}

	public get description() {
		return this.options.name;
	}

	public get clientRequiredPermissions() {
		return this.options.clientRequiredPermissions;
	}

	public get userRequiredPermissions() {
		return this.options.userRequiredPermissions;
	}

	public get cooldown() {
		return this.options.cooldown;
	}

	public get run() {
		return this.options.run;
	}
}
