import { ClientEvents } from "discord.js";
import { GhostClient } from "../structures/GhostClient";

export type GatewayEvent = keyof ClientEvents;
export type Context<T extends GatewayEvent> = [GhostClient, ...ClientEvents[T]];

export interface GhostListener<T extends GatewayEvent = any> {
	event: T;
	once?: boolean;
	run: (context: Context<T>) => unknown;
}
