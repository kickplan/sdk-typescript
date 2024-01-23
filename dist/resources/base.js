"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const node_fetch_1 = require("node-fetch");
class Base {
    constructor(config) {
        if (!config.apiKey && !process.env.KICKPLAN_API_KEY) {
            throw new Error("Please supply a KICKPLAN_API_KEY to initialize this client.");
        }
        this.apiKey = config.apiKey || process.env.KICKPLAN_API_KEY;
        this.baseUrl = config.baseUrl || process.env.KICKPLAN_BASE_URL || 'https://demo-control.proxy.kickplan.io';
    }
    request(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        return (0, node_fetch_1.default)(url, config).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
    }
}
exports.Base = Base;
