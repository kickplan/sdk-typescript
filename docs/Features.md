# [Feature Flagging](https://github.com/kickplan/sdk-typescript/blob/main/src/resources/features/index.ts)

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

In order to resolve features for an account, Kickplan needs to know an account key and the plan key they are on. Plan keys are not currently exposed in the API but will be soon.

```javascript
await kickplan.accounts.post({ key: string, plans?: string[] })
```