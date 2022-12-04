import Push from 'pushover-notifications';

export const getNotificationClient = (userToken: string, apiToken: string) =>
  new Push({ user: userToken, token: apiToken });
