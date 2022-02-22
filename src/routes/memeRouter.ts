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

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { href, like, dislike, download, owner_id, tags } = req.body;

  card
    .updateOne(
      { _id: id },
      {
        href,
        like,
        dislike,
        download,
        owner_id,
        tags,
      },
      {
        upsert: true,
        returnOriginal: false,
      }
    )
    .then((docs) => {
      return res.status(200).json(docs);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
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

router.get("/", (req, res) => {
  card
    .find({})
    .then((docs) => {
      return res.status(200).send(docs);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
});

export default router;
