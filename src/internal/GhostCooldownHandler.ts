import { Collection } from "discord.js";
import { GhostCommand } from "../structures/GhostCommand";
import ms from "ms";

export class GhostCooldownHandler {
	protected cooldowns = new Collection<string, number>();

	constructor(protected command: GhostCommand) {}

	check(userId: string) {
		if (!this.command.cooldown) return;
		const commandCooldown = ms(this.command.cooldown);

		this.cooldowns.sweep((time) => time + commandCooldown > Date.now());
		const cooldown = this.cooldowns.get(userId);

		if (cooldown) throw new Error(`You\'re on cooldown for ${ms(Date.now() - cooldown, { long: true })}`);
	}

	set(userId: string) {
		this.cooldowns.set(userId, Date.now());
	}
}
