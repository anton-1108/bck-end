import { Request, Response } from "express";

import userModel from "../../models/user.model";
import { hashSync } from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // userModel.create({ email, password });
    if (!email) {
      res.status(401).json({ message: "enter your email" });
      return;
    }
    const hashedPassword = hashSync(password, 10);
    const createdUser = await userModel.create({
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "Hereglegch amjilttai burtgelee", data: createdUser });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa", error });
  }
};
