// require('dotenv').config({ path: './.env' });
import dotenv from "dotenv";
import connectDB from "./DB/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

// MongoDB database connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!", err);
  });



/* 
  not an efficient way to connect to the database
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
*/
