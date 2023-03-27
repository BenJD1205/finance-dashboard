import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./databases/connectDB.js";
import routes from "./routes/routes.js";

// CONFIGURATIONS
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//PORT
const PORT = process.env.PORT || 8080;

//connectDB
connectDB();

//routes
app.use("/", routes);

//handler middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
});

//initial server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
