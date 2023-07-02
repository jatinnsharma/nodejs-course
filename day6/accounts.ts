import * as express from "express";

let accounts: any = express.Router();

accounts.get("/", (req: any, res: any): any => {
  res.status(200).json({ message: "Get accounts soon...!" });
});
accounts.post("/", (req: any, res: any): any => {
  res.status(200).json({ message: "Post account soon...!" });
});

export default accounts;
