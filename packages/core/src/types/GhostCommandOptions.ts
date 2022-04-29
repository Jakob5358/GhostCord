import { CommandInteraction } from 'discord.js';
import { GhostClient } from '../structures/GhostClient';

export interface GhostCommandOptions {
  name: string;
  description: string;
  run: (interaction: CommandInteraction<'cached'>, client: GhostClient) => unknown;
}
