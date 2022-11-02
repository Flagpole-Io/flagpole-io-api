import configuration from './configuration';
import { Resolvers } from '../../generated/graphql';
import updateConfiguration from './update-configuration';
import addRequest from './add-request';
import requests from './requests';
import status from './status';

const root: Resolvers = {
  Query: { configuration, requests, status },
  Mutation: { updateConfiguration, addRequest },
} as any;

export default root;
