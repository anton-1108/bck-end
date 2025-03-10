import { configDotenv } from "dotenv";
import express from "express";
import { connectMongoDb } from "./database/db";
import route from "./routes/food-category.route";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
app.use(bodyParser.json());
configDotenv();
connectMongoDb();

app.use("/food", route);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
