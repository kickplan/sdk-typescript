# Accounts Class

The `Accounts` class manages account-related operations. It extends the `Base` class for common functionality.

## Methods

### create(data)

Creates a new account.

**Parameters:**

- `data` (object): An object containing account creation details.
  - `key` (string): **Required**. The unique identifier for the account.
  - `name` (string): *Optional*. The name of the account.
  - `custom_fields` (object): *Optional*. Custom fields for the account.
  - `account_plans` (array): *Optional*. An array of account plans.
    - Each plan object must contain a `plan_key` (string).
  - `feature_overrides` (array): *Optional*. An array of feature overrides.
    - Each override object can contain:
      - `override` (string): Defaults to "variant_key" if not provided.
      - `expires_at` (Date): *Optional*. Expiration date of the override.
      - `feature_key` (string): **Required**. The key of the feature to override.
      - `variant_key` (string): *Optional*. The variant key for the override.

**Returns:** A promise that resolves with the created account data.

### update(data)

Updates an existing account.

**Parameters:**

- `data` (object): An object containing account update details.
  - `key` (string): **Required**. The unique identifier for the account to update.
  - `name` (string): *Optional*. The updated name of the account.
  - `custom_fields` (object): *Optional*. Updated custom fields for the account.
  - `account_plans` (array): *Optional*. An updated array of account plans.
    - Each plan object must contain a `plan_key` (string).
  - `feature_overrides` (array): *Optional*. An updated array of feature overrides.
    - Each override object can contain:
      - `override` (string): Defaults to "variant_key" if not provided.
      - `expires_at` (Date): *Optional*. Expiration date of the override.
      - `feature_key` (string): **Required**. The key of the feature to override.
      - `variant_key` (string): *Optional*. The variant key for the override.

**Returns:** A promise that resolves with the updated account data.

---

Both methods send requests to the `/api/accounts` endpoint with the appropriate HTTP method (POST for create, PUT for update) and the request body formatted as JSON.
