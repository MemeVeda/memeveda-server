import express from "express";
import connectDB from "./db/database";
import router from "./routes/routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cors());
app.use("/", router);

async function connectServer() {
  const port = process.env.PORT || 80;
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is ruunning http://localhost:${port}`);
  });
}

connectServer();

//@ts-ignore

//type Params = {} -for function
//interface Params { --for objects
//}
