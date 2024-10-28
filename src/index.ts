import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics'
import { Evaluation } from './resources/evaluation'
import { BillableObjects } from './resources/billable_objects';
import { KickplanConfig } from './resources/base';

export class KickplanApi {
  features: Features;
  accounts: Accounts;
  metrics: Metrics;
  evaluation: Evaluation;
  billableObjects: BillableObjects;

  constructor(config: KickplanConfig) {
    this.features = new Features(config);
    this.accounts = new Accounts(config);
    this.metrics = new Metrics(config);
    this.evaluation = new Evaluation();
    this.billableObjects = new BillableObjects(config);
  }
}
