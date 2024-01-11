const { KickplanApi } = require('sdk-typescript')

async function exampleTests() {
	const client = new KickplanApi({
		// apiKey: 'e8852581-a84c-44ae-a876-86bdf796cd50',
		baseUrl: 'https://api.kickplan.io'
	})

	await client.features.resolve()
	await client.features.resolveAccount('123')
	await client.features.isFeatureAvailableForAccount('test', '123')
}

exampleTests()