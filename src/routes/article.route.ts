import { FastifyInstance } from "fastify";
import { articlesHandler } from "../handlers";
import { protectedRoutes } from "../hooks";
import {
  getArticleRouteSchema,
  createArticleRouteSchema,
  updateArticleRouteSchema,
  deleteArticleRouteSchema,
} from "./swagger-schema/article.route.schema";

const articleRouter = async (app: FastifyInstance) => {
  // route api app.method("path", {option}, handler)
  // get route should be params... but in this example i create with query
  app.get(
    "/get",
    { schema: getArticleRouteSchema },
    articlesHandler.handleGetArticleById
  );
  app.post(
    "/create",
    { schema: createArticleRouteSchema },
    articlesHandler.handleCreate
  );
  app.patch(
    "/update/:id",
    { schema: updateArticleRouteSchema },
    articlesHandler.handleUpdate
  );
  app.delete(
    "/delete/:id",
    { schema: deleteArticleRouteSchema },
    articlesHandler.handleDelete
  );

  // routes want to protect
  const Routes: object = {
    "/api/articles/get": true,
    "/api/articles/create": true,
    "/api/articles/update/:id": true,
    "/api/articles/delete/:id": true,
  };

  // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
  protectedRoutes(app, Routes);
};

export default articleRouter;
