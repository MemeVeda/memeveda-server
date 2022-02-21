import { Schema, model } from "mongoose";
import { UserType } from "../types/types";

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const user = model<UserType>("user", schema);

export { user, UserType };
