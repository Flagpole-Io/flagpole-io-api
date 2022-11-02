import { RedisClientType } from 'redis';

export interface GraphqlContext {
  redisClient: RedisClientType;
}
