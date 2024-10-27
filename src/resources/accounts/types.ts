export declare type FeatureOverride = {
  override?: "default_on" | "default_off" | "variant_key"; // Enum equivalent in TypeScript
  expires_at?: Date; // Types::DateTime => Date in TypeScript
  feature_key: string; // Types::String => string
  variant_key?: string;
};

export declare type AccountPlan = {
  plan_key: string; // Types::String => string
};

export declare type CreateAccountRequest = {
  key: string; // Types::String => string
  name?: string; // Types::String.optional => string | undefined
  custom_fields?: Record<string, any>; // Types::Hash => Record<string, any> for a key-value pair object

  account_plans?: AccountPlan[]; // Types::Array of AccountPlan

  feature_overrides?: FeatureOverride[]; // Types::Array of FeatureOverride
};

export declare type UpdateAccountRequest = {
  key: string; // Types::String => string
  name?: string; // Types::String.optional => string | undefined
  custom_fields?: Record<string, any>; // Types::Hash => Record<string, any> for a key-value pair object

  account_plans?: AccountPlan[]; // Types::Array of AccountPlan

  feature_overrides?: FeatureOverride[]; // Types::Array of FeatureOverride
};
