import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";
import config from "./config";
import { errorHandler } from "./middlewares/errorHandler";
import { join } from "path";

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

//app.use(express.static(join(__dirname, "../client/build")));

app.use(router);

app.use((req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(config.port || 8080, () =>
  console.log(`Server listening on port ${config.port}...`)
);
