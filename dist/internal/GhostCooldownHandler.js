"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostCooldownHandler = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ms_1 = tslib_1.__importDefault(require("ms"));
class GhostCooldownHandler {
    command;
    cooldowns = new discord_js_1.Collection();
    constructor(command) {
        this.command = command;
    }
    check(userId) {
        if (!this.command.cooldown)
            return;
        const commandCooldown = (0, ms_1.default)(this.command.cooldown);
        this.cooldowns.sweep((time) => time + commandCooldown > Date.now());
        const cooldown = this.cooldowns.get(userId);
        if (cooldown)
            throw new Error(`You\'re on cooldown for ${(0, ms_1.default)(Date.now() - cooldown, { long: true })}`);
    }
    set(userId) {
        this.cooldowns.set(userId, Date.now());
    }
}
exports.GhostCooldownHandler = GhostCooldownHandler;
//# sourceMappingURL=GhostCooldownHandler.js.map