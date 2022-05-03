import { ClientEvents } from "discord.js";
import { GhostClient } from "../structures/GhostClient";

export type BaseEventsType = keyof ClientEvents;

export type GhostEventRun<T extends BaseEventsType> = (client: GhostClient, ...args: ClientEvents[T]) => unknown;

export interface GhostEventType<T extends BaseEventsType> {
  name: T;
  once?: boolean;
  run: GhostEventRun<T>;
}

export enum EventNames {
  COMMAND_EXCEPTION = "commandException",
  COMMAND_NOT_FOUND = "commandNotFound",
  COMMAND_LOADED = "commandLoaded",
  EVENT_LOADED = "eventLoaded",
}
