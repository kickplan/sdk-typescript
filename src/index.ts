import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics'
import { Evaluation } from './resources/evaluation'

export class KickplanApi {
  features: Features;
  accounts: Accounts;
  metrics: Metrics;
  evaluation: Evaluation;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.features = new Features(config);
    this.accounts = new Accounts(config);
    this.metrics = new Metrics(config);
    this.evaluation = new Evaluation();
  }
}