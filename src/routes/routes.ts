import { Router } from "express";
import userRouter from "./userRoutes";
import memeRouter from "./memeRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/meme", memeRouter);

export default router;
