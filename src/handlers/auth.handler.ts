import { FastifyRequest } from "fastify";
import { usersService } from "../services";
import { UserSchemaWithDocument } from "../models/users.model";
import {
  AuthLoginBodyRequest,
  AuthRefreshTokenResponse,
  AuthRegisterBodyRequest,
} from "../interfaces/types/handlers/auth.types.handler";
import { authErrors } from "../errors";
import customError from "../utils/custom-error";

export const handleLogin = async (req: AuthLoginBodyRequest) => {
  const { email, password } = req.body;
  const login = await usersService.userLogin(email, password);
  return login;
};

export const handleRegister = async (
  req: AuthRegisterBodyRequest
): Promise<UserSchemaWithDocument> => {
  const { email, password, name, surname } = req.body;
  const user = await usersService
    .createUser({
      email,
      password,
      name,
      surname,
    })
    .catch((err) => {
      const error: object = err.keyPattern;
      if (Object.entries(error)[0][0] === "email") {
        customError(authErrors.AuthRegisterFailureDuplicateValue);
      } else {
        customError(authErrors.AuthRegisterFailure);
      }
      throw new Error();
    });

  return user;
};

export const handleRefreshToken = async (
  req: FastifyRequest
): Promise<AuthRefreshTokenResponse> => {
  const { userId } = req;
  const accessToken = usersService.createToken(userId!);
  const response: AuthRefreshTokenResponse = {
    accessToken,
  };
  return response;
};

export default {
  handleLogin,
  handleRegister,
  handleRefreshToken,
};
