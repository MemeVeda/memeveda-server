import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(500).json({ message: "Error" });
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is ruunning http://localhost:${port}`);
});

//@ts-ignore

//type Params = {} -for function
//interface Params { --for objects
//}
