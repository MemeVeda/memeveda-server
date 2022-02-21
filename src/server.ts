import express from "express";
import connectDB from "./db/database";
import { PORT } from "./utils/contants";
import router from "./routes/routes";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(500).json({ message: "Error" });
});

app.use("/", router);

async function connectServer() {
  const port = PORT || 80;
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
