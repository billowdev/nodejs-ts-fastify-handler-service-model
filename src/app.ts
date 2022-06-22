import fastify, { FastifyRequest, FastifyServerOptions } from "fastify";
import fastifySwagger from "@fastify/swagger";
import { config } from "./config";
import { userRouter, authRouter } from "./routes";
import articleRouter from "./routes/article.route";
import { CustomError } from "./utils/custom-error";
import { swaggerOption } from "./config/swagger";

declare module "fastify" {
  interface FastifyRequest {
    UserId?: string;
  }
}

// Build Application
const App = (options: FastifyServerOptions) => {
  const app = fastify(options);
  // use cors

  app.register(
    require("fastify-cors"),
    (instance) => (req: FastifyRequest, callback: any) => {
      let corsOptions;

      const client = config.client
      if (client) {
        if (/localhost/.test(client)) {
          // dev should be true
          corsOptions = { origin: true };
          // do not include CORS headers for requests from localhost set origin: false
          // corsOptions = { origin: false };
        } else {
          corsOptions = { origin: true };
        }
        callback(null, corsOptions); // callback expects two parameters: error and options
      }

    }
  );

  // documentation
  app.register(fastifySwagger, swaggerOption.options);

  // api
  app.get("/", async () => "SERVE");

  app.register(authRouter, { prefix: "/api/auth" });
  app.register(userRouter, { prefix: "/api/users" });
  app.register(articleRouter, { prefix: "/api/articles" });

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
