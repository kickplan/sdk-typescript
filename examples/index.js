const { KickplanApi } = require('sdk-typescript')

async function exampleTests() {
  const client = new KickplanApi({
    apiKey: process.env.KICKPLAN_API_KEY,
    baseUrl: ' https://demo-control.proxy.kickplan.io'
  })

  /*      FEATURES      */
  // await client.features.resolve()
  const result = await client.features.resolveWithAccount('123')
  console.log(result)
  const result2 = await client.features.isFeatureAvailableForAccount('test', '123')
  console.log(result2)

  /*      ACCOUNTS       */
  // const result3 = await client.accounts.post({ key: 'features', plans: ['123'] })
  // console.log(result3)

  /*     METRICS        */
  // const result4 = await client.metrics.setMetricsKey({ key: 'video-watched', value: '60', account_key: '123' })
  // console.log(result4)

  // const isBoolean = client.evaluation.getBooleanValue('key', true)
  // console.log(isBoolean)

  // client.evaluation.getObjectValue('key', 'string')
}

exampleTests()
