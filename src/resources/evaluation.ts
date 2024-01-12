export type FlagValueType = 'boolean' | 'string' | 'number' | 'object';
export type PrimitiveValue = null | boolean | string | number;
export type JsonObject = { [key: string]: JsonValue };
export type JsonArray = JsonValue[];
export type JsonValue = PrimitiveValue | JsonObject | JsonArray;


export type FlagValue = boolean | string | number | JsonValue;

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
	getObjectValue(key: string, value: FlagValue): JsonObject {
		if (typeof value === 'object') {
			return value
		}
		throw Error('Value is not an object')
	}

}
