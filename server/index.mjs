import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { BASE_PATH } from "./api-config.mjs";
import { parseParams } from "./utils/parse-params.mjs";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", async (req, res) => {
  const { route, ...params } = req.query;
  const fetchPath = `${BASE_PATH}${route}?${parseParams(params)}&token=${
    process.env.API_KEY
  }`;
  const resp = await fetch(fetchPath);
  const data = await resp.json();
  res.send(data);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
