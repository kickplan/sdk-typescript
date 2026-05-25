"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class Base {
    constructor(config) {
        this.apiKey =
            (config === null || config === void 0 ? void 0 : config.apiKey) ||
                process.env.KICKPLAN_API_KEY ||
                '';
        this.baseUrl =
            (config === null || config === void 0 ? void 0 : config.baseUrl) ||
                process.env.KICKPLAN_BASE_URL ||
                '';
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
