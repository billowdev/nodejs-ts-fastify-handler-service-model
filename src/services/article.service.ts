import { IArticleAttributes } from "../interfaces/types/models/article.model.types";
import db from "../models";
import customError from "../utils/custom-error";
import articleErrors from "../errors/article.errors";
import { getChache, setCache } from "../redis";
import { IArticleBodyResponse } from "../interfaces/types/handlers/article.handler.types";

export const createArticle = async (
  data: IArticleAttributes
): Promise<IArticleBodyResponse> => {
  const response: IArticleBodyResponse = await db.Article.create(data);
  return response;
};

export const getArticleById = async (
  id: string
): Promise<IArticleBodyResponse> => {
  const redisCacheKey = "services:getArticleById";
  const articleCache: any = await getChache(redisCacheKey);
  if (articleCache) {
    return articleCache;
  }
  const article: IArticleBodyResponse = await db.Article.findOne({
    where: { id },
  });
  if (article == null) {
    customError(articleErrors.ArticleGetFailure);
  }
  setCache(redisCacheKey, article);
  return article;
};

export const updateArticle = async (
  id: string,
  title: string,
  text: string,
  type: string,
  UserId: string
): Promise<IArticleBodyResponse> => {
  const isValid = await db.Article.findOne({ where: { id } });
  if (isValid == null) {
    customError(articleErrors.ArticleInvalid);
  }
  const response: IArticleBodyResponse = await db.Article.update(
    { id, title, text, type, UserId },
    { where: { id } }
  ).catch((error: Error) => {
    customError(articleErrors.ArticleUpdateFailure);
  });
  return response;
};
export const deleteArticle = async (
  id: string,
  UserId: string
): Promise<object> => {
  const response: object = await db.Article.destroy({ where: { id, UserId } });
  return response;
};

export default {
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
