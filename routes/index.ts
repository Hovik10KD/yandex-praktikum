import { IncomingMessage, ServerResponse } from "http";

import { postForm, getMainPage } from "./routes";

const { BASE_PATH = "" } = process.env;

export const router = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === `${BASE_PATH}/submit` && req.method === "POST") {
    postForm(req, res);
  }

  if (req.url === "/" && req.method === "GET") {
    getMainPage(req, res);
  }
};
