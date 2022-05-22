import { FastifyInstance } from "fastify";
import logger from "../utils/logger";
import { verifyToken } from "./auth.hook";

export const protectedRoutes = async (
  app: FastifyInstance,
  routesToProtect: any
) => {
  app.addHook("onRequest", async (request, reply) => {
    try {
      const requestPath: string = request.routerPath;
      if (routesToProtect[requestPath]) {
        await verifyToken(request);
      }
    } catch (error) {
      reply.send(error);
    }
  });
};

export default { protectedRoutes };
