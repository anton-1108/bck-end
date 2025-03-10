import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Succesfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await foodCategoryModel.find();
    res.status(200).json({ message: "Succesfully get category", allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodCategory", error });
  }
};

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const upCategory = await foodCategoryModel.updateOne(
      { _id: "" },
      { categoryName: "" }
    );
    res
      .status(200)
      .json({ message: "Succesfully update category", upCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFoodCategory", error });
  }
};

export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const delCategory = await foodCategoryModel.deleteOne({ _id: "" });
    res.status(200).json({ message: "Succesfully delete category" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFoodCategory", error });
  }
};
