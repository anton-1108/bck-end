import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controllers/food-category.controller";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controllers/food.controller";

const FoodRoute = Router();
FoodRoute.post("/", createFood)
  .get("/", getFood)
  .put("/", updateFood)
  .delete("/", deleteFood);

export default FoodRoute;
