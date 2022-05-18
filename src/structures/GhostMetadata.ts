import { deepmerge } from "deepmerge-ts";

export enum GhostMetadataKeys {
	Command = "Metadata:command",
	Listener = "Metadata:listener",
	Route = "Metadata:route",
}

export function setMethodMetadata<M extends Function, V extends {} = Object>(
	metakey: GhostMetadataKeys,
	value: ((target: any, key: string) => V) | V
) {
	return function <T extends Record<K, M>, K extends string>(target: T, key: K) {
		Reflect.defineMetadata(
			metakey,
			deepmerge(Reflect.getMetadata(metakey, target, key), value instanceof Function ? value(target, key) : value),
			target,
			key
		);
	};
}

type Setter = (target: any) => void;
export function setMultiple(...setters: Setter[]) {
	return function (target: any) {
		setters.forEach((setter) => setter(target));
	};
}

export function setClassMetadata<V extends {}>(metakey: GhostMetadataKeys, value: ((target: any) => V) | V) {
	return function (target: any) {
		Reflect.defineMetadata(
			metakey,
			deepmerge(Reflect.getMetadata(metakey, target), value instanceof Function ? value(target) : value),
			target
		);
	};
}

export function setParameterMetadata<M extends Function, V extends {} = Object>(
	metakey: GhostMetadataKeys,
	value: ((target: any, key: string, index: number) => V) | V,
	merge = true
) {
	return function <T extends Record<K, M>, K extends string>(target: T, key: K, index: number) {
		const res = value instanceof Function ? value(target, key, index) : value;
		Reflect.defineMetadata(
			metakey,
			merge ? deepmerge(Reflect.getMetadata(metakey, target, key), res) : res,
			target,
			key
		);
	};
}
