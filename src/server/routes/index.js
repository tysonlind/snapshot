import express from "express";
import photoSearchRouter from "./photoSearchRouter";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use(photoSearchRouter);

export default router;
