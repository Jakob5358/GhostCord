import Consola from "consola";

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
    if (process.env.NODE_ENV === "development") {
      Consola.debug(message);
    } else {
      return void 0;
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
}
