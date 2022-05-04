"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostCommand = void 0;
const GhostCooldownHandler_1 = require("../internal/GhostCooldownHandler");
/**
 * The base command class
 * @since 1.0.0
 */
class GhostCommand {
    options;
    cooldownHandler = new GhostCooldownHandler_1.GhostCooldownHandler(this);
    constructor(options) {
        this.options = options;
    }
    get name() {
        return this.options.name;
    }
    get description() {
        return this.options.name;
    }
    get clientRequiredPermissions() {
        return this.options.clientRequiredPermissions;
    }
    get userRequiredPermissions() {
        return this.options.userRequiredPermissions;
    }
    get cooldown() {
        return this.options.cooldown;
    }
    get run() {
        return this.options.run;
    }
}
exports.GhostCommand = GhostCommand;
//# sourceMappingURL=GhostCommand.js.map