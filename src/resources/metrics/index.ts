import { Base } from '../base';
import { MetricsRequest, MetricsResponse } from './types';

export class Metrics extends Base {
  setMetricsKey(data: MetricsRequest): Promise<MetricsResponse> {
    return this.request(`/api/metrics/set`, {
      method: 'POST',
      body: JSON.stringify({
        key: data.key,
        value: data.value,
        account_key: data.account_key,
        time: data.time,
        idempotency_key: data.idempotency_key
      })
    });
  }
}
