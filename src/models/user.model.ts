import mongoose, { Schema } from "mongoose";
type userSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: string[];
};

const userSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    role: { type: ["USER", "ADMIN"], default: "USER" },
    orderedFoods: { type: [Schema.ObjectId], ref: "FoodsOrder" },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<userSchemaType>("user", userSchema);
