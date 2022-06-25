import { FastifyInstance } from "fastify";
import { articlesHandler } from "../handlers";
import { protectedRoutes } from "../hooks";
import {
  getArticleRouteSchema,
  getArticleListRouteSchema,
  createArticleRouteSchema,
  updateArticleRouteSchema,
  deleteArticleRouteSchema,
  getAllArticleRouteSchema,
} from "./swagger-schema/article.route.schema";

const articleRouter = async (app: FastifyInstance) => {
  // route api app.method("path", {option}, handler)

  app.get(
    "/",
    { schema: getAllArticleRouteSchema },
    articlesHandler.handleGetArticles
  );

  app.get(
    "/get",
    { schema: getArticleRouteSchema },
    articlesHandler.handleGetArticleById
  );

  app.get(
    "/get/author",
    { schema: getArticleListRouteSchema },
    articlesHandler.handleGetByAuthor
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
    "/api/articles/get": false,
    "/api/articles": false,
    "/api/articles/get/author": true,
    "/api/articles/create": true,
    "/api/articles/update/:id": true,
    "/api/articles/delete/:id": true,
  };

  // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
  protectedRoutes(app, Routes);
};

export default articleRouter;
