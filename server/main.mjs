import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "node:path";

import { port } from "./config.mjs";
import { wrongCollectionCodeError, wrongReturnCodeError } from "./errors.mjs";
import { shipments, returns } from "./database.mjs";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.resolve("client")));

app.post("/api/collection", (req, res) => {
  const requestCode = Number(req.body.code);

  if (Number.isNaN(requestCode)) {
    res.json(wrongCollectionCodeError).status(400);
    return;
  }

  const found = shipments[requestCode];

  if (!found) {
    res.json(wrongCollectionCodeError).status(400);
    return;
  }

  res.json(found).status(200);
});

app.post("/api/return", (req, res) => {
  const requestCode = req.body.code;

  if (Number.isNaN(requestCode)) {
    res.json(wrongReturnCodeError).status(400);
    return;
  }

  const found = returns[requestCode];

  if (!found) {
    res.json(wrongReturnCodeError).status(400);
    return;
  }

  res.json(found).status(200);
});

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
