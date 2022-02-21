import { Router } from "express";
import { card } from "../db/memeSchema";

const router = Router();

router.post("/", (req, res) => {
  const { href, like, dislike, download, owner_id, tags } = req.body;

  let newcard = new card({
    href: href,
    like: like,
    dislike: dislike,
    download: download,
    owner_id: owner_id,
    tags: tags,
  });

  newcard
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
  card
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

export default router;
