import { MutationResolvers } from '../../generated/graphql';
import keys from '../../database/keys';

const addRequest: MutationResolvers['addRequest'] = async (
  _,
  { input },
  { redisClient },
) => redisClient.lPush(keys.REQUESTS, JSON.stringify(input));

export default addRequest;
