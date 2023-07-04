import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import { port } from "./config.mjs";
import path from "node:path";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.resolve("client")));

app.post("/api/collection", (req, res) => {
  const code = req.body.code;
  res.json({ type: "collection", code });
});

app.post("/api/return", (req, res) => {
  const code = req.body.code;
  res.json({ type: "return", code });
});

app.listen(port);
