import fastify, { FastifyServerOptions } from "fastify";
import fastifySwagger from "@fastify/swagger";
import { CustomError } from "./utils/custom-error";
import { Swagger } from "./config/swagger";
import { userRouter, authRouter } from "./routes";

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}

const App = (options: FastifyServerOptions) => {
  const app = fastify(options);
  app.register(fastifySwagger, Swagger.options);
  app.get("/", async () => "SERVE");
  app.register(authRouter, { prefix: "/api/auth" });
  app.register(userRouter, { prefix: "/api/users" });
  app.setErrorHandler((err, req, res) => {
    const customError: CustomError = err;
    res.status(customError.statusCode || 500).send({
      error: {
        message: customError.message,
        code: customError.code,
        data: customError.data,
      },
    });
  });
  return app;
};

export default App;
