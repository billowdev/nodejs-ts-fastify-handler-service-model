import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  mongodb: {
    uri: process.env.MONGO_URI,
  },
  webtoken: process.env.JWT_SECRET,
  client: process.env.CLIENT_URL,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisUsername: process.env.REDIS_USERNAME,
  redisPassword: process.env.REDIS_PASSWORD,
  redisDb: process.env.REDIS_DATABASE
};

export default config;
