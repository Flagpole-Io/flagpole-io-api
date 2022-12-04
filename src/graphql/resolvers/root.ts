import configuration from './configuration';
import { Resolvers } from '../../generated/graphql';
import updateConfiguration from './update-configuration';
import addRequest from './add-request';
import requests from './requests';
import status from './status';
import sendNotification from './send-notification';

const root: Resolvers = {
  Query: { configuration, requests, status },
  Mutation: { updateConfiguration, addRequest, sendNotification },
} as any;

export default root;
