export type FlagValueType = 'boolean' | 'string' | 'number' | 'object';
export type PrimitiveValue = null | boolean | string | number;
export type JsonObject = { [key: string]: JsonValue };
export type JsonArray = JsonValue[];
export type JsonValue = PrimitiveValue | JsonObject | JsonArray;


export type FlagValue = boolean | string | number | JsonValue;