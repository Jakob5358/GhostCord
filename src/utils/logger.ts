import Consola from "consola";
import { container } from "../structures/GhostContainer";

export class GhostLogger {
	public info(message: string) {
		Consola.info(message);
	}
	public error(message: string) {
		Consola.error(message);
	}

	public warn(message: string) {
		Consola.warn(message);
	}

	public debug(message: string) {
		if (container.config().debug) {
			Consola.debug(message);
		}
	}

	public success(message: string) {
		Consola.success(message);
	}

	public log(message: string) {
		Consola.log(message);
	}

	public fatal(message: string) {
		Consola.fatal(message);
	}

	public trace(message: string) {
		Consola.trace(message);
	}

	public get getLogger() {
		return Consola;
	}
}
