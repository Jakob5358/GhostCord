import { GhostCommandOptions } from "../types/GhostCommandOptions";

/**
 * The base command class
 * @since 1.0.0
 */
export class GhostCommand {
  public constructor(protected options: GhostCommandOptions) {}

  public get name() {
    return this.options.name;
  }

  public get description() {
    return this.options.name;
  }

  public get run() {
    return this.options.run;
  }
}
