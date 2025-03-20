import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(401).json({ message: "emailee oruulna uu" });
      return;
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "burtgelgui hereglegch bn" });
      return;
    }
    const isCorrect = compareSync(password, user.password);
    if (!isCorrect) {
      res.status(401).json({ message: "password buruu bn" });
      return;
    }
    res.status(200).json({ message: "amjilttai nevterlee", data: user });
    return;
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa,", error });
  }
};
