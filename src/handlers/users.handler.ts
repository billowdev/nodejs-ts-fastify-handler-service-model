import { FastifyRequest } from "fastify";
import { AuthLoginBodyResponse } from "../interfaces/types/handlers/auth.types.handler";
import { usersService } from "../services";

export const handleUserProfile = async (
  req: FastifyRequest
): Promise<AuthLoginBodyResponse> => {
  const { userId } = req;
  const user: AuthLoginBodyResponse = await usersService.getUserById(userId!);
  return user;
};

export default {
  handleUserProfile,
};
