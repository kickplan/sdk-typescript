"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillableObjects = void 0;
const base_1 = require("../base");
class BillableObjects extends base_1.Base {
    upsert(data) {
        return this.request(`/api/billable_objects`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
}
exports.BillableObjects = BillableObjects;
