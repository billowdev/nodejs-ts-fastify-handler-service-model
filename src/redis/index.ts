import { redisClient } from "./redisClient";

export const getChache = async (key: string = ""): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    redisClient
      .get(key)
      .then((result: string) => {
        resolve(JSON.parse(result));
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
export const setCache = async (
  key: string = "",
  value: object = {},
  ex: number = 60
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    redisClient
      .set(key, JSON.stringify(value), "EX", ex)
      .then(() => {
        resolve(true);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};
export const delCache = async (
  key: string = "",
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    redisClient
      .del(key)
      .then(() => {
        resolve(true);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};
