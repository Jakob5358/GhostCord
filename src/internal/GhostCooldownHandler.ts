import { Collection } from "discord.js";
import { GhostCommand } from "../structures/GhostCommand";
import ms from "ms";

export class GhostCooldownHandler {
	protected cooldowns = new Collection<string, number>();

	public constructor(protected command: GhostCommand) {}

	/**
	 *
	 * @param userId The user id to check
	 * @returns {boolean} Whether the user is on cooldown
	 */
	public check(userId: string) {
		if (!this.command.cooldown) return;

		const commandCooldown = ms(this.command.cooldown);

		this.cooldowns.sweep((time) => time + commandCooldown > Date.now());

		const cooldown: number | undefined = this.cooldowns.get(userId);

		if (cooldown) {
			return {
				response: `You\'re on cooldown for ${ms(Date.now() - cooldown, { long: true })}`,
				value: true,
			};
		}

		return {
			response: `You\'re not on cooldown`,
			value: false,
		};
	}

	/**
	 * @param userId The user id to add to cooldown
	 */
	public set(userId: string) {
		this.cooldowns.set(userId, Date.now());
	}
}
