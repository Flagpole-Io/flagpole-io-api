import { QueryResolvers } from '../../generated/graphql';
import keys from '../../database/keys';

const configuration: QueryResolvers['configuration'] = async (
  _parent,
  _args,
  { redisClient },
) => {
  const result = await redisClient.get(keys.CONFIGURATION);
  return result ? JSON.parse(result) : undefined;
};

export default configuration;
