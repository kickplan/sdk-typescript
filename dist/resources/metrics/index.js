"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metrics = void 0;
const base_1 = require("../base");
class Metrics extends base_1.Base {
    setMetricsKey(data) {
        return this.request(`/api/metrics/set`, {
            method: 'POST',
            body: JSON.stringify({
                key: data.key,
                value: data.value,
                account_key: data.account_key,
                time: data.time,
                idempotency_key: data.idempotency_key
            })
        });
    }
}
exports.Metrics = Metrics;
