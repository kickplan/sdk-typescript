"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const node_fetch_1 = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();
class Base {
    constructor(config) {
        this.apiKey =
            (config === null || config === void 0 ? void 0 : config.apiKey) ||
                process.env.KICKPLAN_API_KEY;
        this.baseUrl =
            (config === null || config === void 0 ? void 0 : config.baseUrl) ||
                process.env.KICKPLAN_BASE_URL;
        if (!this.apiKey) {
            throw new Error("Please supply a KICKPLAN_API_KEY via config object or environment variable");
        }
        if (!this.baseUrl) {
            throw new Error("Please supply a KICKPLAN_BASE_URL via config object or environment variable");
        }
    }
    request(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        return (0, node_fetch_1.default)(url, config)
            .then((response) => {
            return response.text().then((text) => {
                if (!response.ok) {
                    throw new Error(JSON.stringify({
                        status: response.status,
                        statusText: response.statusText,
                        url: response.url,
                        method: config.method || 'GET',
                        responseBody: text,
                        requestBody: config.body ? JSON.parse(config.body) : undefined
                    }, null, 2));
                }
                if (!text) {
                    return {};
                }
                try {
                    return JSON.parse(text);
                }
                catch (parseError) {
                    throw new Error(JSON.stringify({
                        error: 'JSON Parse Error',
                        rawResponse: text,
                        parseError: parseError instanceof Error ? parseError.message : String(parseError)
                    }, null, 2));
                }
            });
        })
            .catch((error) => {
            const errorContext = {
                message: error instanceof Error ? error.message : 'Unknown error',
                endpoint,
                baseUrl: this.baseUrl,
                requestConfig: {
                    method: config.method || 'GET',
                    body: config.body ? JSON.parse(config.body) : undefined
                },
                stack: error instanceof Error ? error.stack : undefined
            };
            throw new Error(JSON.stringify(errorContext, null, 2));
        });
    }
}
exports.Base = Base;
