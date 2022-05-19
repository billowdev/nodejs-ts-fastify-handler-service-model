import { FastifyInstance } from "fastify";
import { usersHandler } from "../handlers";
import { verifyToken } from "../hooks/auth.hook";

export const userRouter = async (app: FastifyInstance) => {
  app.get(
    "/profile",
    {
      preHandler: [verifyToken],
    },
    usersHandler.handleUserProfile
  );
};

export default userRouter;
