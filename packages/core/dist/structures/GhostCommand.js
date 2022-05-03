"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostCommand = void 0;
/**
 * The base command class
 * @since 1.0.0
 */
class GhostCommand {
    options;
    constructor(options) {
        this.options = options;
    }
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
exports.GhostCommand = GhostCommand;
//# sourceMappingURL=GhostCommand.js.map