# [Metrics](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/index.ts)

A request to set a value for a key metric, for a given account.

```javascript
await kickplan.metrics.setMetricsKey({ key: string, value: string, account_key: string, time: Date, idempotency_key: string })
```

Returns a response with [metrics response json](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/types.ts) object.
