import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//Main application class used for configuration and startup

export class Server {
  private PORT = 8080;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configMiddlewares();
    this.loadRoutes();
  }

  private configMiddlewares() {
    console.log("Setting up middlewares...");
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    dotenv.config();
  }

  private loadRoutes() {
    console.log("Loading routes...");
    this.app.get("/", (req, res) => {
      res.send("App works");
    });
  }

  connect() {
    console.log("Connecting to DB...");
    mongoose.connect(process.env.DB_URL as string).then((_) => {
      console.log("Connected to DB");
      console.log("Starting app...");
      const PORT = process.env.PORT || this.PORT;
      this.app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
      });
    });
  }
}
