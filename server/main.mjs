import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { port } from "./config.mjs";

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.get("/api/collection", (req, res) => {
  res.json({ type: "collection" });
});

app.get("/api/return", (req, res) => {
  res.json({ type: "return" });
});

app.listen(port);
