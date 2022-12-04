declare module 'pushover-notifications' {
  export interface PushoverConfig {
    user: string;
    token: string;
  }

  export interface PushoverMessage {
    message: string;
    title?: string;
    sound?: string;
    device?: string;
    priority?: number;
  }

  class Push {
    constructor(config: PushoverConfig);

    send(
      message: PushoverMessage,
      callback?: (error: Error, result: any) => void,
    ): void;
  }

  export default Push;
}
