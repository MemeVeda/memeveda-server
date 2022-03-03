import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  mongoose.connect(process.env.DB_CONN_STRING || "", {
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
