import { FastifyRequest } from "fastify";
import { articleService } from "../services";
import {
  ArticleCreateBodyRequest,
  IArticleBodyResponse,
  ArticleUpdateBodyRequest,
  ArticleGetRequest,
  ArticleDeleteRequest,
  IArticleAuthorResponse,
} from "../interfaces/types/handlers/article.handler.types";
import customError from "../utils/custom-error";
import { IArticleAttributes } from "../interfaces/types/models/article.model.types";
import { articleErrors, authErrors } from "../errors";
import logger from "../utils/logger";

export const handleCreate = async (
  request: ArticleCreateBodyRequest
): Promise<IArticleBodyResponse> => {
  const { UserId } = request;
  const { title, text, type } = request.body;
  const article: IArticleBodyResponse = await articleService
    .createArticle({ title, text, type, UserId })
    .catch((err) => {
      logger.error(["- DEBUG ERROR ON article -", err, "- DEBUG -"]);
      customError(articleErrors.ArticleCreateFailure);
      throw new Error();
    });
  return article;
};

export const handleGetArticles = async (): Promise<IArticleBodyResponse> => {
  const response: IArticleBodyResponse = await articleService.fetchArticles()
  return response
}

export const handleGetByAuthor = async (request: FastifyRequest) => {
  const { UserId } = request;
  if (UserId) {
    const serviceResponse: IArticleAuthorResponse = await articleService.fetchArticleByAuthor(UserId);
    const response = { data: serviceResponse };
    return response;
  }
}

export const handleGetArticleById = async (
  request: ArticleGetRequest
): Promise<IArticleAttributes> => {
  const id = request.query.id;
  const article: IArticleAttributes = await articleService.fetchArticleById(id);
  return article;
};

export const handleUpdate = async (
  request: ArticleUpdateBodyRequest
): Promise<Number[]> => {
  const { title, text, type } = request.body;
  const id = request.params.id;
  const { UserId } = request;
  const article: Number[] = await articleService.updateArticle(
    id!,
    title!,
    text!,
    type!,
    UserId!
  );
  return article;
};

export const handleDelete = async (
  request: ArticleDeleteRequest
): Promise<number> => {
  const { UserId } = request;
  const id = request.params.id;
  console.log(id)
  const article: number = await articleService.deleteArticle(id, UserId!);
  return article;
};

export default {
  handleCreate,
  handleGetArticleById,
  handleUpdate,
  handleDelete,
  handleGetByAuthor,
  handleGetArticles
};
