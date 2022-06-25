import { IArticleAttributes } from "../interfaces/types/models/article.model.types";
import db from "../models";
import customError from "../utils/custom-error";
import articleErrors from "../errors/article.errors";
// import { delCache, getChache, setCache } from "../redis";
import {  IArticlesBodyResponse } from "../interfaces/types/handlers/article.handler.types";

export const createArticle = async (
  data: IArticleAttributes
): Promise<IArticleAttributes> => {
  const response: IArticleAttributes = await db.Article.create(data);
  return response;
};

// const getArticleCacheKey = "services:getArticleById";

export const fetchArticleById = async (
  id: string
): Promise<IArticleAttributes> => {

  // const articleCache: any | IArticleBodyResponse = await getChache(getArticleCacheKey);
  // if (articleCache) {
  //   return articleCache;
  // }
  const article: IArticleAttributes = await db.Article.findOne({
    where: { id },
  });

  if (article == null) {
    customError(articleErrors.ArticleGetFailure);
  }
  // setCache(getArticleCacheKey, article);
  return article;
};

export const updateArticle = async (
  id: string,
  title: string,
  text: string,
  type: string,
  UserId: string
): Promise<Number[]> => {
  const isValid = await db.Article.findOne({ where: { id } });
  if (isValid == null) {
    customError(articleErrors.ArticleInvalid);
  }
  const response: Number[] = await db.Article.update(
    { id, title, text, type, UserId },
    { where: { id } }
  ).catch((error: Error) => {
    customError(articleErrors.ArticleUpdateFailure);
  });
  // delete cache
  // delCache(getArticleCacheKey)
  return response;
};

export const deleteArticle = async (
  id: string,
  UserId: string
): Promise<number> => {
  const response: number = await db.Article.destroy({ where: { id, UserId } });
  return response;
};


export const fetchArticleByAuthor = async (
  UserId: string
): Promise<IArticlesBodyResponse> => {
  const response: IArticlesBodyResponse = await db.Article.findAll({ where: { UserId } });
  return response
}

export const fetchArticles = async (

) => {
  const data = await db.Article.findAll({
    include:[
      {
        model:db.User, 
        attributes:[
          'id', 'name', 'surname'
        ]
      }
    ]
  })
  
  const response = { data: data }
  return response
}

export default {
  createArticle,
  fetchArticleById,
  updateArticle,
  deleteArticle,
  fetchArticleByAuthor,
  fetchArticles
};
