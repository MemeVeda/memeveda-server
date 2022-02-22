import { Router } from "express";
import { user } from "../db/userSchema";

const router = Router();

router.post("/", (req, res) => {
  const { username, description, imageUrl } = req.body;

  let newuser = new user({
    username: username,
    description: description,
    imageUrl: imageUrl,
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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  user
    .find({
      _id: id,
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
