// import express module
import * as express from "express";

let app: any = express();
// app object used to develop the rest services.
// Ex. GET,POST,PUT,DELETE...

// GET Request
app.get("/", (req: any, res: any) => {
  res.status(200).json({ message: "welcome to typeScript with nodejs" });
});

// assign the port no
app.listen(8080, () => {
  console.log("server working");
});

//express @types/express ===> compatable libraries to develop node js with typesScript
