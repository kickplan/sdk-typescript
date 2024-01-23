"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
class Evaluation {
    getBooleanValue(key, value) {
        if (typeof value === 'boolean') {
            return value;
        }
        throw Error('Value is not a boolean');
    }
    getStringValue(key, value) {
        if (typeof value === 'string') {
            return value;
        }
        throw Error('Value is not a string');
    }
    getNumberValue(key, value) {
        if (typeof value === 'number') {
            return value;
        }
        throw Error('Value is not a number');
    }
    getObjectValue(key, value) {
        if (typeof value === 'object') {
            return value;
        }
        throw Error('Value is not an object');
    }
}
exports.Evaluation = Evaluation;
