import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "bodyParser";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
