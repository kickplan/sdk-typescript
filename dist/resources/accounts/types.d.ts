export declare type FeatureOverride = {
    override?: "default_on" | "default_off" | "variant_key";
    expires_at?: Date;
    feature_key: string;
    variant_key?: string;
};
export declare type AccountPlan = {
    plan_key: string;
};
export declare type CreateAccountRequest = {
    key: string;
    name?: string;
    custom_fields?: Record<string, any>;
    account_plans?: AccountPlan[];
    feature_overrides?: FeatureOverride[];
};
export declare type UpdateAccountRequest = {
    key: string;
    name?: string;
    custom_fields?: Record<string, any>;
    account_plans?: AccountPlan[];
    feature_overrides?: FeatureOverride[];
};
