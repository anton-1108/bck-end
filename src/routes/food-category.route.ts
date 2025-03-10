import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controllers/food-category.controller";

const route = Router();
route
  .post("/", createFoodCategory)
  .get("/", getFoodCategory)
  .put("/", updateFoodCategory)
  .delete("/", deleteFoodCategory);

export default route;
