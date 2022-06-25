import { FastifyRequest } from "fastify";
import { IArticleAttributes } from "../models/article.model.types";

export type ArticleCreateBodyRequest = FastifyRequest<{
  Body: {
    title?: string | undefined;
    text?: string | undefined;
    type?: string | undefined;
    userId?: string | undefined;
  };
}>;

export type ArticleUpdateBodyRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    id?: string;
    title?: string | undefined;
    text?: string | undefined;
    type?: string | undefined;
  };
}>;

export interface IArticleBodyResponse {
  id?: string;
  title?: string;
  text?: string;
  UserId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  data?: IArticleAttributes[]
}

export type ArticleGetRequest = FastifyRequest<{
  Querystring: { id: string };
}>;

export type ArticleDeleteRequest = FastifyRequest<{
  Params: { id: string };
}>;


export interface IArticleAuthorResponse {
  articleAuthor: IArticleAuthor[]
}

export interface IArticleAuthor {
  id: string
  title: string
  text: string
  createdAt: string
  updatedAt: string
  UserId: string
}
