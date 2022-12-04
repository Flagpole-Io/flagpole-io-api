import { createClient } from 'redis';

const client = createClient();

const getDatabaseClient = async () => {
  if (!client.isReady) {
    await client.connect();
  }

  return client;
};

export default getDatabaseClient;
