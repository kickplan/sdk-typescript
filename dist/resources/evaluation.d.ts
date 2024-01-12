export type FlagValueType = 'boolean' | 'string' | 'number' | 'object';
export type PrimitiveValue = null | boolean | string | number;
export type JSONObject = {
    [key: string]: JSONValue;
};
export type JSONArray = JSONValue[];
export type JSONValue = PrimitiveValue | JSONObject | JSONArray;
export type FlagValue = boolean | string | number | JSONValue;
export declare class Evaluation {
    getBooleanValue(key: string, value: FlagValue): boolean;
    getStringValue(key: string, value: FlagValue): string;
    getNumberValue(key: string, value: FlagValue): number;
    getObjectValue(key: string, value: FlagValue): JSONValue;
}
