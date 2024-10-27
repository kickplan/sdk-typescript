# Introduction

Kickplan takes care of the complex business logic for monetization, using our SDK, your application only needs to manage access to features and track value metrics. These functions are keyed by account. For detailed terminology, please consult our documentation.

# Configuration

To import the package using CommonJS

```javascript
const { KickplanApi } = require('sdk-typescript')
```

Or in ES6

```javascript
import { KickplanApi } = require('sdk-typescript')
```

After importing, please initialize your client:

```javascript
const kickplan = new KickplanApi({
  apiKey: 'YOUR_API_KEY_HERE',
  baseUrl: 'YOUR_URL_HERE'
})
```

.env variables are also supported via KICKPLAN_API_KEY and KICKPLAN_BASE_URL respectively.


# [Features](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/features/index.ts):

To check which features are resolvable

```javascript
await kickplan.features.resolve()
```

To resolve features with context

```typescript
await kickplan.features.resolveWithAccount(accountId: string)
```

To resolve a specific feature with context

```typescript
await kickplan.features.isFeatureAvailableForAccount(featureName: string, accountId: string)
```

# [Accounts](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/accounts/index.ts):

The `Accounts` class provides methods to manage account operations in the SDK.

## Create a new account
```typescript
const newAccount = await accounts.create({
  key: "unique-account-id",
  name: "New Account",
  custom_fields: { industry: "Technology" },
  account_plans: [{ plan_key: "basic_plan" }]
});
```
## Update an existing account
```typescript
const updatedAccount = await accounts.update({
  key: "existing-account-id",
  name: "Updated Account Name",
  feature_overrides: [{
    feature_key: "premium_feature",
    variant_key: "enabled"
  }]
});
```

This class supports creating and updating accounts with various attributes including custom fields, account plans, and feature overrides. For detailed method parameters and options, refer to the individual method documentation.

# [Metrics](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/index.ts):

A request to set a value for a key metric.

```javascript
await kickplan.metrics.setMetricsKey({ key: string, value: string, timestamp: Date })
```

Returns a response with [metrics response json](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/metrics/types.ts) object.

# [Evaluation](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/evaluation.ts)

4 evaluation methods are included

```javascript
kickplan.evaluation.getBooleanValue(key, value)
kickplan.evaluation.getStringValue(key, value)
kickplan.evaluation.getNumberValue(key, value)
kickplan.evaluation.getObjectValue(key, value)

```
