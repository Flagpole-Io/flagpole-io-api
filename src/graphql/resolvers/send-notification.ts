import { MutationResolvers } from '../../generated/graphql';
import keys from '../../database/keys';
import { getNotificationClient } from '../../services/get-notification-client';

const sendNotification: MutationResolvers['sendNotification'] = async (
  _,
  { input },
  { redisClient },
) => {
  const configString = await redisClient.get(keys.CONFIGURATION);
  const config = configString ? JSON.parse(configString) : {};

  if (config.pushoverUserKey && config.pushoverApiToken) {
    const notificationClient = getNotificationClient(
      config.pushoverUserKey,
      config.pushoverApiToken,
    );
    notificationClient.send({ message: input.message });
    return true;
  } else {
    return false;
  }
};

export default sendNotification;
