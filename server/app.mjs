import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "node:path";

import { wrongCollectionCodeError, wrongReturnCodeError } from "./errors.mjs";
import { shipments, returns } from "./database.mjs";

export const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.resolve("client")));

app.post("/api/collection", (req, res) => {
  const requestCode = Number(req.body.code);

  if (Number.isNaN(requestCode)) {
    res.status(400).json(wrongCollectionCodeError);
    return;
  }

  const found = shipments[requestCode];

  if (!found) {
    res.status(400).json(wrongCollectionCodeError);
    return;
  }

  res.status(200).json(found);
});

app.post("/api/return", (req, res) => {
  const requestCode = req.body.code;

  if (Number.isNaN(requestCode)) {
    res.status(400).json(wrongReturnCodeError);
    return;
  }

  const found = returns[requestCode];

  if (!found) {
    res.status(400).json(wrongReturnCodeError);
    return;
  }

  res.status(200).json(found);
});
