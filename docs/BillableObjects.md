# [Billable Objects](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/billable_objects/index.ts)
Billable Objects represent long-lived entities in your system that persist and are billed across multiple billing cycles. Unlike one-time charges or usage-based metrics, billable objects maintain their state and continue to generate charges until explicitly terminated.

Billable objects can only be upserted.

Common examples include:
- Provisioned resources (servers, databases)
- User seats or licenses
- Ongoing subscriptions to specific features

```typescript
// Create or update a billable object
await kickplan.billableObjects.upsert({
  external_id: "server-instance-123",    // Your unique identifier for this object
  external_type: "compute-instance",     // The type of billable object
  account_key: "customer-account",       // Associated account identifier
  properties: {                          // Optional metadata
    size: "large",
    region: "us-east-1"
  }
})
```

### Properties
- `external_id`: Your unique identifier for the billable object
- `external_type`: The type of billable object (e.g., "compute-instance", "user-seat")
- `account_key`: Associated account identifier
- `properties`: Optional metadata about the billable object (key-value pairs)

### Methods
```typescript
// Create or update a billable object
await kickplan.billableObjects.upsert({...})
```
