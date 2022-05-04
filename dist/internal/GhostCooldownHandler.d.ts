import { Collection } from "discord.js";
import { GhostCommand } from "../structures/GhostCommand";
export declare class GhostCooldownHandler {
    protected command: GhostCommand;
    protected cooldowns: Collection<string, number>;
    constructor(command: GhostCommand);
    check(userId: string): void;
    set(userId: string): void;
}
//# sourceMappingURL=GhostCooldownHandler.d.ts.map