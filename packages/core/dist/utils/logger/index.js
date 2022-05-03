"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostLogger = void 0;
const tslib_1 = require("tslib");
const consola_1 = tslib_1.__importDefault(require("consola"));
const GhostContainer_1 = require("../../structures/GhostContainer");
class GhostLogger {
    info(message) {
        consola_1.default.info(message);
    }
    error(message) {
        consola_1.default.error(message);
    }
    warn(message) {
        consola_1.default.warn(message);
    }
    debug(message) {
        if (GhostContainer_1.container.config.debug) {
            consola_1.default.debug(message);
        }
    }
    success(message) {
        consola_1.default.success(message);
    }
    log(message) {
        consola_1.default.log(message);
    }
    fatal(message) {
        consola_1.default.fatal(message);
    }
    trace(message) {
        consola_1.default.trace(message);
    }
}
exports.GhostLogger = GhostLogger;
//# sourceMappingURL=index.js.map