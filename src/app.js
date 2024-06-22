import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); // limit is optional
app.use(express.urlencoded({ limit: "16kb", extended: true })); // data coming from url 
app.use(express.static("public"));  // data from 'public' folder
app.use(cookieParser());

export { app };
