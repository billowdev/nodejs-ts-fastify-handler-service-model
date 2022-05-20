const Redis = require("ioredis")
import { config } from "../config";

export const redisClient = new Redis({
	host: config.redisHost,
	port: config.redisPort,
	username: config.redisUsername, // needs Redis >= 6
	password: config.redisPassword,
	db: config.redisDb, // Defaults to 0
});