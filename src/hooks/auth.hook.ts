import { FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import customError from "../utils/custom-error";
import config from "../config/config";
import { TokenDecoded } from "../interfaces/types/hooks/auth.types.hook";
import { authErrors } from "../errors";

export const validateHeadersAuth = (req: FastifyRequest): string => {
  const header: string | undefined = req.headers.authorization;
  if (!header) {
    customError(authErrors.AuthMissingHeaders);
  }
  const accessToken: string = header!.split(" ")[1];
  if (!accessToken) {
    customError(authErrors.AuthMissingHeaders);
  }
  return accessToken;
};

export const verifyToken = async (req: FastifyRequest): Promise<boolean> => {
  try {
    const token = validateHeadersAuth(req);
    const decoded: TokenDecoded = Object(
      verify(token, config.webtoken as string)
    );
    req.userId = decoded.aud;
    return true;
  } catch (err) {
    customError(authErrors.AuthJWTError);
    return false;
  }
};

export default { verifyToken };
