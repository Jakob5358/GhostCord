import { GhostCommand } from "../structures/GhostCommand";
import { GhostListener } from "./GhostListener";

export interface Cog {
	commands: GhostCommand[];
	listeners: GhostListener[];
	active: boolean;
}
