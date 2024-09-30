import dotenv from "dotenv";
import connectDB from "./database/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("connection fail error :", error);
  });
