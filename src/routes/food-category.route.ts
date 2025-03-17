import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controllers/food-category.controller";

const categoryRoute = Router();
categoryRoute
  .post("/", createFoodCategory)
  .get("/", getFoodCategory)
  .put("/", updateFoodCategory)
  .delete("/", deleteFoodCategory);

export default categoryRoute;
