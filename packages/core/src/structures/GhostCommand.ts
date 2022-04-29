import { GhostCommandOptions } from "../types/GhostCommandOptions";

export class GhostCommand {
  constructor(private options: GhostCommandOptions) {}

  get name() {
    return this.options.name;
  }

  get description() {
    return this.options.name;
  }
  
  get run() {
    return this.options.run;
  }
}