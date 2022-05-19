import fastify, { FastifyRequest, FastifyServerOptions } from "fastify";
import fastifySwagger from "@fastify/swagger";
import { CustomError } from "./utils/custom-error";
import { Swagger } from "./config/swagger";
import { userRouter, authRouter } from "./routes";
import { config } from "./config";

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}

// Build Application
const App = (options: FastifyServerOptions) => {
  const app = fastify(options);
  // use cors
  app.register(require('fastify-cors'), (instance) => (req: FastifyRequest, callback: any) => {
    let corsOptions;
    // do not include CORS headers for requests from localhost
    if (/localhost/.test(config.client!)) {
      corsOptions = { origin: false }
    } else {
      corsOptions = { origin: true }
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  })
  // documentation
  app.register(fastifySwagger, Swagger.options);
  
  // api  
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
