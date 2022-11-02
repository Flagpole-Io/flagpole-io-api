import { createClient } from 'redis';

const client = createClient();

const getClient = async () => {
  if (!client.isReady) {
    await client.connect();
  }

  return client;
};

export default getClient;
