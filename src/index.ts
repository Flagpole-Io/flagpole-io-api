import express, { Express } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import getClient from './database/get-client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const setupGraphql = async () => {
  const client = await getClient();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { redisClient: client },
    }),
  );
};

setupGraphql();

app.listen(port, () => {
  console.log(`️[server]: Server is running at http://localhost:${port}`);
});
