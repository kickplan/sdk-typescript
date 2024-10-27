import { Base } from "../base";
import { CreateAccountRequest, UpdateAccountRequest } from "./types";

export class Accounts extends Base {
  // Create Method
  create(data: { [key: string]: any }) {
    const createAccountRequest: CreateAccountRequest = {
      key: data.key, // Required field
      name: data.name, // Optional field
      custom_fields: data.custom_fields, // Optional field
      account_plans: data.account_plans?.map((plan: any) => ({
        plan_key: plan.plan_key, // Required in account_plans array
      })),
      feature_overrides: data.feature_overrides?.map((override: any) => ({
        override: override.override || "variant_key", // Default if not provided
        expires_at: override.expires_at
          ? new Date(override.expires_at)
          : undefined, // Optional
        feature_key: override.feature_key, // Required in feature_overrides array
        variant_key: override.variant_key, // Optional
      })),
    };

    return this.request(`/api/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createAccountRequest), // Use the transformed request
    });
  }

  // Update Method
  update(data: { [key: string]: any }) {
    // Transform the incoming plain object into an UpdateAccountRequest
    const updateAccountRequest: UpdateAccountRequest = {
      key: data.key, // Required field
      name: data.name, // Optional field
      custom_fields: data.custom_fields, // Optional field
      account_plans: data.account_plans?.map((plan: any) => ({
        plan_key: plan.plan_key, // Required in account_plans array
      })),
      feature_overrides: data.feature_overrides?.map((override: any) => ({
        override: override.override || "variant_key", // Default if not provided
        expires_at: override.expires_at
          ? new Date(override.expires_at)
          : undefined, // Optional
        feature_key: override.feature_key, // Required in feature_overrides array
        variant_key: override.variant_key, // Optional
      })),
    };

    return this.request(`/api/accounts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAccountRequest), // Use the transformed request
    });
  }
}
