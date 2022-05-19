import { Schema, Document, model } from "mongoose";
import { UserSchema } from "../interfaces/types/models/Users.types.model";

const collection = "Users";

export interface UserSchemaWithDocument extends UserSchema, Document {}

const usersSchema = new Schema<UserSchemaWithDocument>(
  {
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
    },
    surname: {
      type: "string",
    },
  },
  {
    collection,
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

export default model(collection, usersSchema);
