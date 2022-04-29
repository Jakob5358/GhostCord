import { Client } from "discord.js";
import { GhostOptions } from "../types/GhostOptions";

/**
 * The extended client class.
 * @since 1.0.0
 */
export class GhostClient extends Client {
  constructor(options: GhostOptions) {
    super(options);
  }
}
