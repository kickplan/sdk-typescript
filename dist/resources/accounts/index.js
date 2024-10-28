"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const base_1 = require("../base");
class Accounts extends base_1.Base {
    create(data) {
        var _a, _b;
        const createAccountRequest = {
            key: data.key,
            name: data.name,
            custom_fields: data.custom_fields,
            account_plans: (_a = data.account_plans) === null || _a === void 0 ? void 0 : _a.map((plan) => ({
                plan_key: plan.plan_key,
            })),
            feature_overrides: (_b = data.feature_overrides) === null || _b === void 0 ? void 0 : _b.map((override) => ({
                override: override.override || "variant_key",
                expires_at: override.expires_at
                    ? new Date(override.expires_at)
                    : undefined,
                feature_key: override.feature_key,
                variant_key: override.variant_key,
            })),
        };
        return this.request(`/api/accounts`, {
            method: "POST",
            body: JSON.stringify(createAccountRequest),
        });
    }
    update(data) {
        var _a, _b;
        const updateAccountRequest = {
            key: data.key,
            name: data.name,
            custom_fields: data.custom_fields,
            account_plans: (_a = data.account_plans) === null || _a === void 0 ? void 0 : _a.map((plan) => ({
                plan_key: plan.plan_key,
            })),
            feature_overrides: (_b = data.feature_overrides) === null || _b === void 0 ? void 0 : _b.map((override) => ({
                override: override.override || "variant_key",
                expires_at: override.expires_at
                    ? new Date(override.expires_at)
                    : undefined,
                feature_key: override.feature_key,
                variant_key: override.variant_key,
            })),
        };
        return this.request(`/api/accounts/${data.key}`, {
            method: "PUT",
            body: JSON.stringify(updateAccountRequest),
        });
    }
}
exports.Accounts = Accounts;
