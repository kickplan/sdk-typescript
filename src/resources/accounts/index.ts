import { Base } from '../base';
import { AccountRequest } from './types';

export class Accounts extends Base {
	post(data: AccountRequest) {
		return this.request(`/api/features/resolve`, {
			method: 'POST',
			body: JSON.stringify({ key: data.key, plans: data.plans })
		});
	}
}



