const Redis = require("ioredis");
import { config } from "../config";

export const redisClient = new Redis({
  host: config.redis.redisHost,
  port: config.redis.redisPort,
  bind: config.redis.bind,
  username: config.redis.redisUsername, // needs Redis >= 6
  password: config.redis.redisPassword,
  db: config.redis.redisDb, // Defaults to 0
});
