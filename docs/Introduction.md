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


# [Features](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/features/index.ts):

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

# [Accounts](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/accounts/index.ts):

In order to resolve features for an account, Kickplan needs to know an account key and the plan key they are on. Plan keys are not currently exposed in the API but will be soon.

```javascript
await kickplan.accounts.post({ key: string, plans?: string[] })
```

# [Metrics](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/metrics/index.ts):

A request to set a value for a key metric.

```javascript
await kickplan.metrics.setMetricsKey({ key: string, value: string, timestamp: Date })
```

Returns a response with [metrics response json](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/metrics/types.ts) object.

# [Evaluation](https://github.com/kickplan/sdk-typescript/blob/v1/src/resources/evaluation.ts)

4 evaluation methods are included

```javascript
kickplan.evaluation.getBooleanValue(key, value)
kickplan.evaluation.getStringValue(key, value)
kickplan.evaluation.getNumberValue(key, value)
kickplan.evaluation.getObjectValue(key, value)

```
