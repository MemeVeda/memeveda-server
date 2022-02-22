import express from "express";
import connectDB from "./db/database";
import { PORT } from "./utils/contants";
import router from "./routes/routes";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(500).json({ message: "Error" });
});

app.use("/", router);

app.get("/download", (req, res) => {
  res.download(
    "https://images.unsplash.com/photo-1645438716899-188cff591995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  );
});

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
