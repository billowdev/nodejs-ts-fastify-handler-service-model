import { FastifyInstance } from "fastify";
import { authHandler } from "../handlers";
import { verifyToken } from "../hooks";

const authRouter = async (app: FastifyInstance) => {
  app.post("/login", authHandler.handleLogin);
  app.post("/register", authHandler.handleRegister);
  app.post(
    "/refresh-token",
    {
      preHandler: [verifyToken],
    },
    authHandler.handleRefreshToken
  );
};

export default authRouter;
