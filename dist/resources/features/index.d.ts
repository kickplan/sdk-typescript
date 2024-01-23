import { Base } from '../base';
import { Feature } from './types';
export declare class Features extends Base {
    resolve(): Promise<Feature[]>;
    resolveWithAccount(accountId: string): Promise<Feature[]>;
    isFeatureAvailableForAccount(featureName: string, accountId: string): Promise<Feature>;
}
