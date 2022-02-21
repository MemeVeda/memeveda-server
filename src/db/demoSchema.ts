import { Schema, Types, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface UserType {
  name: string;
  email: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const user = model<UserType>("user", schema);

export { user, UserType };
