# [Metrics](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/index.ts)

A request to set a value for a key metric.

```javascript
await kickplan.metrics.setMetricsKey({ key: string, value: string, timestamp: Date })
```

Returns a response with [metrics response json](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/metrics/types.ts) object.