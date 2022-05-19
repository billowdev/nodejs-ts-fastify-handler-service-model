import config from "../config";

exports.options = {
  routePrefix: "/api/documentation",
  swagger: {
    info: {
      title: "node fastify app init - swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: `localhost:${config.port}`,
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
};
