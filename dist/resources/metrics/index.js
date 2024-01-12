"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metrics = void 0;
const base_1 = require("../base");
class Metrics extends base_1.Base {
    setMetricsKey(data) {
        return this.request(`/api/metrics/${data.key}/set`, {
            method: 'POST',
            body: JSON.stringify({ value: data.value, timestamp: data.timestamp })
        });
    }
}
exports.Metrics = Metrics;
