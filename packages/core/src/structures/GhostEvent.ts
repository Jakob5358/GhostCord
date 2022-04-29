import { BaseEventsType, GhostEvent } from "../types/GhostEvent";

/**
 * Our event handler
 * @param event The data of the event
 * @returns
 * @since 1.0.0
 */
export const GhostEventManager = <T extends BaseEventsType>(event: GhostEvent<T>) => event;
