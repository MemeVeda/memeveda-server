import { Schema, model } from "mongoose";
import { MemeCardType } from "../types/types";

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<MemeCardType>({
  href: { type: String, required: true },
  like: { type: Number, required: true, default: 0 },
  dislike: { type: Number, required: true, default: 0 },
  download: { type: Number, required: true, default: 0 },
  owner_id: { type: String, default: "" },
  tags: { type: [String] },
});

const card = model<MemeCardType>("card", schema);

export { card };
