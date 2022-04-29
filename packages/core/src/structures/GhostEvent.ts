import { BaseEventsType, GhostEventType } from "../types/GhostEvent";

/**
 * Our event handler
 * @param event The data of the event
 * @since 1.0.0
 */
export const GhostEvent = <T extends BaseEventsType>(event: GhostEventType<T>) => event;
