import { FastifyInstance } from "fastify";
import mongoose from "mongoose";
import config from "./config";

export const dbConfig = (app: FastifyInstance): boolean => {
  mongoose.connect(config.mongodb.uri!);
  let configStatus = true;
  mongoose.connection.on("error", (err) => {
    app.log.error(err);
    configStatus = false;
  });

  mongoose.connection.once("open", () => {
    app.log.info("MongoDB has been connected");
  });
  return configStatus;
};

export default dbConfig;
