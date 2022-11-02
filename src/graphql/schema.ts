import * as fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import root from './resolvers/root';

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');

const schema = makeExecutableSchema({ typeDefs, resolvers: root });

export default schema;
