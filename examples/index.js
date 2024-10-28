require('dotenv').config();
const { KickplanApi } = require("sdk-typescript");

// Verify imports
console.log('Imports:', {
  KickplanApi: !!KickplanApi
});

// Simple environment variable test class
class EnvTest {
  testEnv() {
    console.log({
      directEnvAccess: {
        apiKey: process.env.KICKPLAN_API_KEY,
        baseUrl: process.env.KICKPLAN_BASE_URL
      }
    });
  }
}

async function runTests() {
  // Test environment variables
  console.log('Testing environment setup...');
  const envTest = new EnvTest();
  envTest.testEnv();

  // Initialize client
  const client = new KickplanApi();

  try {
    // Create test account
    // console.log('\nCreating account...');
    // const account = await client.accounts.create({
    //   key: "123",
    //   name: "Globo Corp",
    //   plans: ["lite"],
    //   custom_fields: { foo: "bar" }
    // });
    // console.log('Account created:', account);

    // Test account update
    console.log('\nUpdating account...');
    const updatedAccount = await client.accounts.update({
      key: "123",
      custom_fields: { foo: "baz" },
    });
    console.log('Account updated:', updatedAccount);

    // Features tests
    console.log('Testing features...');
    const features = await client.features.resolveWithAccount("123");
    console.log('Features resolved:', features);

    const featureAvailable = await client.features.isFeatureAvailableForAccount(
      "test",
      "123"
    );
    console.log('Feature availability:', featureAvailable);

    // Metrics test
    console.log('Setting metrics...');
    const metrics = await client.metrics.setMetricsKey({
      key: 'video-watched',
      value: '60',
      account_key: '123'
    });
    console.log('Metrics set:', metrics);

    // Evaluation tests
    const isBoolean = client.evaluation.getBooleanValue('key', true);
    console.log('Boolean evaluation:', isBoolean);

    client.evaluation.getObjectValue('key', JSON.parse('{"foo": "bar"}'));

    // Billable objects test
    console.log('Creating billable object...');
    const billableObject = await client.billableObjects.upsert({
      external_id: '123',
      external_type: 'widget',
      account_key: '123',
      properties: { foo: 'bar' },
    });
    console.log('Billable object created:', billableObject);

  } catch (error) {
    console.error('Test execution failed:', error);
  }
}

runTests();
