import { Schema, model } from "mongoose";
import { UserType } from "../types/types";

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<UserType>({
  username: { type: String, required: true, unique: true, maxlength: 15 },
  description: { type: String, required: true, maxlength: 50 },
  imageUrl: { type: String, default: "https://joeschmoe.io/api/v1/random" },
});

const user = model<UserType>("user", schema);

export { user };
