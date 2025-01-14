import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

import userRouter from "./routes/user.js";
import propertyRouter from "./routes/property.js";
import swapRouter from "./routes/swap.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

// app.use(cookieParser());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/property", propertyRouter);
app.use("/api/swap", swapRouter);

export default app;
