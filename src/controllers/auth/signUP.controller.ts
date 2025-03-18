import { Request, Response } from "express";
import userModel from "../../models/user.model";

import { hashSync } from "bcryptjs";

export const signUP = (req: Request, res: Response) => {
  const { email, password } = req.body;
  userModel.create({ email, password });

  if (!email) {
    res.status(401).json({ message: "Emailaa bichne uu " });
    return;
  }
  console.log("raw password", password);
  const hashedPassword = hashSync(password, 10);
  console.log("hashedPassword", hashedPassword);
  res.status(200).json({ message: "done" });
};
