import { Base } from '../base';
import { Feature } from './types';

export class Features extends Base {
	resolve(): Promise<Feature[]> {
		return this.request(`/api/features/resolve`);
	}

	resolveWithAccount(accountId: string): Promise<Feature[]> {
		return this.request('/api/features/resolve', {
			method: 'POST',
			body: JSON.stringify({ context: { account_id: accountId } })
		})
	}

	isFeatureAvailableForAccount(featureName: string, accountId: string): Promise<Feature> {
		return this.request(`/api/features/${featureName}/resolve`, {
			method: 'POST',
			body: JSON.stringify({ context: { account_id: accountId } })
		})	
	}
}



