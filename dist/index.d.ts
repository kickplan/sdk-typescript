import { Features } from './resources/features';
import { Accounts } from './resources/accounts';
import { Metrics } from './resources/metrics';
export declare class KickplanApi {
    features: Features;
    accounts: Accounts;
    metrics: Metrics;
    constructor(config: {
        apiKey: string;
        baseUrl?: string;
    });
}
