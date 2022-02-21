import mongoose from "mongoose";
import { DB_CONN_STRING } from "../utils/contants";

async function connectDB() {
  mongoose.connect(DB_CONN_STRING, {
    //@ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.log(error);
  });

  db.on("connected", () => {
    console.log("Connected Database");
  });
}

export default connectDB;
