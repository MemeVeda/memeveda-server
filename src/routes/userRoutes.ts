import { Router } from "express";
import { user } from "../db/userSchema";

const router = Router();

router.post("/", (req, res) => {
  const { username, description, imageUrl, password } = req.body;

  let newuser = new user({
    username: username,
    description: description,
    imageUrl: imageUrl,
    password: password,
  });

  newuser
    .save()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  user
    .findOne({
      username: username,
    })
    .then((docs) => {
      return res.status(200).json(docs);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
});

router.get("/", (req, res) => {
  user
    .find({})
    .then((docs) => {
      return res.status(200).json(docs);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
});

export default router;
