"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMemberEvent = exports.Member = void 0;
var updated_member_event_1 = require("./ts/updated_member_event");
Object.defineProperty(exports, "Member", { enumerable: true, get: function () { return updated_member_event_1.Member; } });
Object.defineProperty(exports, "UpdateMemberEvent", { enumerable: true, get: function () { return updated_member_event_1.UpdateMemberEvent; } });
__exportStar(require("./ts/members"), exports);
