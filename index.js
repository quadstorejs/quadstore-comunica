"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEngine = exports.ActorInitSparql = void 0;
const index_browser_1 = require("@comunica/actor-init-sparql/index-browser");
Object.defineProperty(exports, "ActorInitSparql", { enumerable: true, get: function () { return index_browser_1.ActorInitSparql; } });
exports.newEngine = () => {
    return require('./engine.js');
};
//# sourceMappingURL=index.js.map