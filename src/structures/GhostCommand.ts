import { Collection } from "discord.js";
import ms from "ms";
import { GhostCommandOptions } from "../types/GhostCommandOptions";
import { GhostMetadataKeys, setMethodMetadata } from "./GhostMetadata";

/**
 * The base command class
 * @since 1.0.0
 */
export class GhostCommand {
	protected cooldowns = new Collection<string, number>();
	public constructor(protected options: GhostCommandOptions) {}

	/**
	 *
	 * @param userId The user id to check
	 * @returns Null or the cooldown remaining
	 */
	public onCooldown(userId: string) {
		if (!this.cooldown) return;

		const commandCooldown = ms(this.cooldown);

		this.cooldowns.sweep((time) => time + commandCooldown > Date.now());

		const cooldown = this.cooldowns.get(userId);
		return cooldown ? Date.now() - cooldown : null;
	}

	/**
	 * @param userId The user id to add to cooldown
	 */
	public setCooldown(userId: string) {
		this.cooldowns.set(userId, Date.now());
	}

	public get name() {
		return this.options.name;
	}

	set name(name: string) {
		this.options.name = name;
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

export function Command(description: string) {
	return setMethodMetadata<GhostCommandOptions["run"], GhostCommandOptions>(
		GhostMetadataKeys.Command,
		(target, key) => {
			return {
				name: key,
				description,
				run: target[key],
			};
		}
	);
}
