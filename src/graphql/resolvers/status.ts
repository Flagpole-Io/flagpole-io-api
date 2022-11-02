import { QueryResolvers } from '../../generated/graphql';
import keys from '../../database/keys';

const status: QueryResolvers['status'] = async (
  _parent,
  _args,
  { redisClient },
) => redisClient.hGetAll(keys.STATUS);

export default status;
