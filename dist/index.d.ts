import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics';
import { Evaluation } from './resources/evaluation';
import { BillableObjects } from './resources/billable_objects';
import { KickplanConfig } from './resources/base';
export declare class KickplanApi {
    features: Features;
    accounts: Accounts;
    metrics: Metrics;
    evaluation: Evaluation;
    billableObjects: BillableObjects;
    constructor(config: KickplanConfig);
}
