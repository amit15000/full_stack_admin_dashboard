import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "bodyParser";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
//routes
import clientRoutes from "./routes/client";
import generalRoutes from "./routes/general";
import salesRoutes from "./routes/sales";
import managementRoutes from "./routes/management";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser());
app.use(cors());

app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/client", clientRoutes);
app.use("/client", clientRoutes);
