export type FlagValueType = 'boolean' | 'string' | 'number' | 'object';
export type PrimitiveValue = null | boolean | string | number;
export type JSONObject = { [key: string]: JSONValue };
export type JSONArray = JSONValue[];
export type JSONValue = PrimitiveValue | JSONObject | JSONArray;
// type JSONValue =
//     | string
//     | number
//     | boolean
//     | { [x: string]: JSONValue }
//     | Array<JSONValue>;

export type FlagValue = boolean | string | number | JSONValue;

export class Evaluation {
	getBooleanValue(key: string, value: FlagValue): boolean {
		if (typeof value === 'boolean') {
			return value
		}
		throw Error('Value is not a boolean')
	}
	getStringValue(key: string, value: FlagValue): string {
		if (typeof value === 'string') {
			return value
		}
		throw Error('Value is not a string')
	}
	getNumberValue(key: string, value: FlagValue): number {
		if (typeof value === 'number') {
			return value
		}
		throw Error('Value is not a number')
	}
	getObjectValue(key: string, value: FlagValue): JSONValue {
		if (typeof value === 'object') {
			return value
		}
		throw Error('Value is not an object')
	}

}
