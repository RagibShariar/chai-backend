import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const app = express();


// database connection using IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    // mongoose.connect(`mongodbURI/database_name`);
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error:", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
