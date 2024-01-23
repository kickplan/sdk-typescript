import { Base } from '../base';
import { AccountRequest } from './types';
export declare class Accounts extends Base {
    post(data: AccountRequest): Promise<unknown>;
}
