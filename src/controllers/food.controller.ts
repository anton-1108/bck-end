import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(200).json({ message: "Succesfully created food", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const allFoods = await foodModel.find().populate("category");
    res.status(200).json({ message: "Succesfully get foods", allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoods", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const upFood = await foodModel.updateOne({ _id: "" }, { foodName: "" });
    res.status(200).json({ message: "Succesfully update food", upFood });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFood", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const delFoods = await foodModel.deleteOne({ _id: "" });
    res.status(200).json({ message: "Succesfully delete food" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFood", error });
  }
};
