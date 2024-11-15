import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
//routes
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/client.js";
import salesRoutes from "./routes/client.js";
import managementRoutes from "./routes/client.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database conneciton succeful");
  })
  .catch((err) => console.log(err))
  .then(() => {
    app.listen(PORT, () => console.log(`Server PORT : ${PORT}`));
  })
  .catch((err) => {
    console.log("Server failed :", err);
  });
