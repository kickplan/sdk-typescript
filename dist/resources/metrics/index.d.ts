import { Base } from '../base';
import { MetricsRequest, MetricsResponse } from './types';
export declare class Metrics extends Base {
    setMetricsKey(data: MetricsRequest): Promise<MetricsResponse>;
}
