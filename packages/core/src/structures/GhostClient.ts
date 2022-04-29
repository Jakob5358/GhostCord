import { Client } from 'discord.js'; 
import { GhostOptions } from '../types/GhostOptions';

export class GhostClient extends Client {
  constructor(options: GhostOptions) {
    super(options);
  }
}