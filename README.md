# Development notes:

To test this SDK follow these steps:
1. run "npm install" in root directory
2. run "npm run build" in root directory
3. cd examples
4. run "npm install .."
5. "node index.js" in examples directory. 
6. Edit index.js file in examples directory as needed.

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

.env variables are also supported via KICKPLAN_API_KEY adn KICKPLAN_BASE_URL respectively.


# Features:

To check which features are resolvable

```javascript
await kickplan.features.resolve()
```

To resolve features with context

```javascript
await kickplan.features.resolveWithAccount(accountId: string)
```

To resolve a specific feature with context

```javascript
await kickplan.features.isFeatureAvailableForAccount(featureName: string, accountId: string)
```

# Accounts:

In order to resolve features for an account, Kickplan needs to know an account key and the plan key they are on. Plan keys are not currently exposed in the API but will be soon.

```javascript
await kickplan.accounts.post({ key: string, plans?: string[] })
```

# Metrics:

A request to set a value for a key metric.

```javascript
await kickplan.metrics.setMetricsKey({ key: string, value: string, timestamp: Date })
```

Returns a response with metrics json object.

