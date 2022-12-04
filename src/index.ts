import express, { Express } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import getDatabaseClient from './database/get-database-client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const setupGraphql = async () => {
  const redisClient = await getDatabaseClient();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { redisClient },
    }),
  );
};

setupGraphql();

app.listen(port, () => {
  console.log(`️[server]: Server is running at http://localhost:${port}`);
});
