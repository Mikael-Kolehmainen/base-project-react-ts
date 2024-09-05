import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GetExample } from "./controllers/Example";

/*
  This is the main file for the backend API where the endpoints should be defined.
*/

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/get-example", async (req: Request, res: Response) => {
  try {
    const products = await GetExample();
    res.status(200).send(products);
  } catch (error: any) {
    res.status(500).send();
    console.error("Error on write: ", error.message);
    console.error(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
