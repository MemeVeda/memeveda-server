import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  mongoose.connect("mongodb+srv://memeveda:pR7kj7Lo5z8sh7nC@cluster0.dyhrbot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
