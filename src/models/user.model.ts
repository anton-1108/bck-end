import mongoose, { Schema } from "mongoose";

type UserSchameType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: string[];
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    role: ["USER", "ADMIN"],
    orderedFoods: { type: Schema.ObjectId, ref: "FoodsOrder" },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchameType>("user", UserSchema);
