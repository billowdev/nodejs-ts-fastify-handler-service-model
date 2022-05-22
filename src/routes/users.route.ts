import { FastifyInstance } from "fastify";
import { usersHandler } from "../handlers";
import { protectedRoutes } from "../hooks";
import { profileRouteSchema } from "./swagger-schema/users.route.schema";

export const userRouter = async (app: FastifyInstance) => {
  app.get(
    "/profile",
    { schema: profileRouteSchema },
    usersHandler.handleUserProfile
  );

  // routes want to protect
  const Routes: object = {
    "/api/users/profile": true,
  };

  // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
  protectedRoutes(app, Routes);
};

export default userRouter;
