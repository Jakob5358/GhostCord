"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const tslib_1 = require("tslib");
const node_util_1 = require("node:util");
const glob_1 = tslib_1.__importDefault(require("glob"));
exports.search = (0, node_util_1.promisify)(glob_1.default);
//# sourceMappingURL=glob.js.map