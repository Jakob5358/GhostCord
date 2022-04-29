import { ClientEvents } from "discord.js";
import { GhostClient } from "../structures/GhostClient";


export type BaseEventsType = keyof ClientEvents

export type GhostEventType<T extends BaseEventsType> = (
    client: GhostClient,
    ...event: ClientEvents[T]
) => void

export interface GhostEvent<T extends BaseEventsType> {
    name: T
    once?: boolean
    run: GhostEventType<T>
}