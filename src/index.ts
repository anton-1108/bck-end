import { configDotenv } from "dotenv";
import express from "express";
import { connectMongoDb } from "./database/db";
import route from "./routes/food-category.route";
import userRoute from "./routes/auth.route";
import bodyParser from "body-parser";
import cors from "cors";
import categoryRoute from "./routes/food-category.route";
import FoodRoute from "./routes/food.route";
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
configDotenv();
connectMongoDb();

app.use("/food-category", categoryRoute);
app.use("/auth", userRoute);

app.use("/food", FoodRoute);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
