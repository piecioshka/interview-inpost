import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { port } from "./config.mjs";
import path from "node:path";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(path.resolve("client")));

app.get("/api/collection", (req, res) => {
  res.json({ type: "collection" });
});

app.get("/api/return", (req, res) => {
  res.json({ type: "return" });
});

app.listen(port);
