"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Features = void 0;
const base_1 = require("../base");
class Features extends base_1.Base {
    resolve() {
        return this.request(`/api/features/resolve`);
    }
    resolveWithAccount(accountId) {
        return this.request('/api/features/resolve', {
            method: 'POST',
            body: JSON.stringify({ context: { account_id: accountId } })
        });
    }
    isFeatureAvailableForAccount(featureName, accountId) {
        return this.request(`/api/features/${featureName}/resolve`, {
            method: 'POST',
            body: JSON.stringify({ context: { account_id: accountId } })
        });
    }
}
exports.Features = Features;
