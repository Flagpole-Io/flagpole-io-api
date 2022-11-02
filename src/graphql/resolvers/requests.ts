import { QueryResolvers } from '../../generated/graphql';
import keys from '../../database/keys';

const requests: QueryResolvers['requests'] = async (
  _parent,
  _args,
  { redisClient },
) => {
  const requestList = await redisClient.lRange(keys.REQUESTS, 0, -1);
  return requestList.map((requestString) => JSON.parse(requestString));
};

export default requests;
