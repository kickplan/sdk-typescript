import { FlagValue } from '../evaluation';
export declare type MetricsRequest = {
    key: string;
    value?: FlagValue;
    timestamp: Date;
};
export declare type MetricsResponse = {
    metrics: any;
};
