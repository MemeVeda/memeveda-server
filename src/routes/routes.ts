import { Router } from "express";
import userRouter from "./userRoutes";

const router = Router();

router.use("/user", userRouter);

export default router;
