# Introduction

Kickplan takes care of the complex business logic for monetization, using our SDK, your application only needs to manage access to features and track value metrics. These functions are keyed by account. For detailed terminology, please consult our documentation.

# Configuration

To import the package using CommonJS

```typescript
const { KickplanApi } = require('@kickplan/sdk-typescript')
```

Or in ES6

```typescript
import { KickplanApi } from '@kickplan/sdk-typescript'
```

After importing, please initialize your client:

```typescript
const kickplan = new KickplanApi({
  apiKey: 'YOUR_API_KEY_HERE',
  baseUrl: 'YOUR_URL_HERE'
})
```

.env variables are also supported via KICKPLAN_API_KEY and KICKPLAN_BASE_URL respectively.

# Available Resources

## [Features](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/features/index.ts)
Manage and check feature availability for accounts. Use this to determine which features are accessible to specific accounts.

```typescript
await kickplan.features.resolveWithAccount(featureKey, accountKey)
```

## [Accounts](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/accounts/index.ts)
Handle account operations including creation, updates, and management of account-specific settings.

```typescript
await kickplan.accounts.create({
  key: "unique-account-id",
  name: "Account Name"
})
```

## [Metrics](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/index.ts)
Track and set key metrics for accounts.

```typescript
await kickplan.metrics.setMetricsKey({
  key: "metric-key",
  value: "metric-value",
  timestamp: new Date()
})
```

## [Billable Objects](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/billable_objects/index.ts)
Manage billable entities within your application. These are used to track metrics and billing events over multiple billing cycles.

```typescript
await kickplan.billableObjects.create({
  key: "billable-object-key",
  type: "billable-object-type",
  parameters: {
    // additional parameters
  }
})
```

For detailed API documentation and advanced usage of each resource, please refer to our [API Reference](https://docs.kickplan.com/api).
