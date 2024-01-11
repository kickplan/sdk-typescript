import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics'

export class KickplanApi {
  features: Features;
  accounts: Accounts;
  metrics: Metrics;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.features = new Features(config);
    this.accounts = new Accounts(config);
    this.metrics = new Metrics(config);
  }
}