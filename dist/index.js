"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KickplanApi = void 0;
const features_1 = require("./resources/features");
const accounts_1 = require("./resources/accounts");
const metrics_1 = require("./resources/metrics");
const evaluation_1 = require("./resources/evaluation");
class KickplanApi {
    constructor(config) {
        this.features = new features_1.Features(config);
        this.accounts = new accounts_1.Accounts(config);
        this.metrics = new metrics_1.Metrics(config);
        this.evaluation = new evaluation_1.Evaluation();
    }
}
exports.KickplanApi = KickplanApi;
