import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics';
import { Evaluation } from './resources/evaluation';
export declare class KickplanApi {
    features: Features;
    accounts: Accounts;
    metrics: Metrics;
    evaluation: Evaluation;
    constructor(config: {
        apiKey: string;
        baseUrl?: string;
    });
}
