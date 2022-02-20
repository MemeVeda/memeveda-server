import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Hello backend</h1>");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is ruunning http://localhost:${port}`);
});

//@ts-ignore

//type Params = {} -for function
//interface Params { --for objects
//}
