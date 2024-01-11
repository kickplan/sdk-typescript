const { KickplanApi } = require('sdk-typescript')

async function exampleTests() {
	const client = new KickplanApi({
		apiKey: 'e8852581-a84c-44ae-a876-86bdf796cd50',
		baseUrl: ' https://demo-control.proxy.kickplan.io'
	})

	/*      FEATURES      */
	// await client.features.resolve()
	const result = await client.features.resolveWithAccount('123')
	// console.log(result)
	const result2 = await client.features.isFeatureAvailableForAccount('test', '123')
	// console.log(result2)

	/*      ACCOUNTS       */
	
		// const result3 = await client.accounts.post({ key: 'features', plans: ['123'] })
		// console.log(result3)



	// /*     METRICS        */
	const result4 = await client.metrics.setMetricsKey({ key: 'features', value: true, timestamp: new Date() })
	console.log(result4)
}

exampleTests()