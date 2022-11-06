import { MutationResolvers } from '../../generated/graphql';
import keys from '../../database/keys';

const updateConfiguration: MutationResolvers['updateConfiguration'] = async (
  _,
  { input },
  { redisClient },
) => {
  const currentConfigurationString = await redisClient.get(keys.CONFIGURATION);
  const currentConfiguration = currentConfigurationString
    ? JSON.parse(currentConfigurationString)
    : {};
  const newConfiguration = { ...currentConfiguration, ...input };

  await redisClient.set(keys.CONFIGURATION, JSON.stringify(newConfiguration));
  return newConfiguration;
};

export default updateConfiguration;
