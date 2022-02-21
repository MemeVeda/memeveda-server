import { Router } from "express";
import { user } from "../db/demoSchema";

const router = Router();

router.get("/", (req, res) => {
  //   const { name, email } = req.body;

  let newuser = new user({
    name: "kiran",
    email: "thorat@gmail.com",
  });

  newuser
    .save()
    .then((result) => {
      return res.status(500).json(result);
    })
    .catch((error) => {
      return res.status(300).json({
        message: error.message,
      });
    });
});

export default router;
