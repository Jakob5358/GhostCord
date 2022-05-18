import { GatewayEvent, GhostListener } from "../types/GhostListener";
import { GhostMetadataKeys, setMethodMetadata } from "./GhostMetadata";

export function On<T extends GatewayEvent>(event: T) {
	return setMethodMetadata<GhostListener<T>["run"], GhostListener>(GhostMetadataKeys.Listener, (target, key) => {
		return {
			event,
			run: target[key],
		};
	});
}

export function Once(event: GatewayEvent) {
	return setMethodMetadata<GhostListener["run"], GhostListener>(GhostMetadataKeys.Listener, (target, key) => {
		return {
			event,
			once: true,
			run: target[key],
		};
	});
}
