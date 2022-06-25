import { FastifyInstance } from "fastify";
import { authHandler } from "../handlers";
import { verifyToken } from "../hooks";
import { refreshTokenRouteSchema, loginRouteSchema, registerRouteSchema, isAuthenticatedRouteSchema } from "./swagger-schema/auth.route.schema";

const authRouter = async (app: FastifyInstance) => {
  app.post("/login", { schema: loginRouteSchema }, authHandler.handleLogin);
  app.post("/register",
    { schema: registerRouteSchema },
    authHandler.handleRegister);

  app.get("/isauthenticated",
    {
      schema: isAuthenticatedRouteSchema,
      preHandler: [verifyToken],
    },

    authHandler.isAuthenticated
  )
  app.post(
    "/refresh-token",
    {
      preHandler: [verifyToken],
      schema: refreshTokenRouteSchema
    },
    authHandler.handleRefreshToken
  );
};

export default authRouter;
