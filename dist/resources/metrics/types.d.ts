import { FlagValue } from '../evaluation';
export declare type MetricsRequest = {
    key: string;
    account_key: string;
    value: FlagValue;
    time?: Date;
    idempotency_key?: string;
};
export declare type MetricsResponse = {
    metrics: any;
};
