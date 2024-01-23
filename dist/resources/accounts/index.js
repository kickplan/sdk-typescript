"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const base_1 = require("../base");
class Accounts extends base_1.Base {
    post(data) {
        return this.request(`/api/accounts`, {
            method: 'POST',
            body: JSON.stringify({ key: data.key, plans: data.plans })
        });
    }
}
exports.Accounts = Accounts;
