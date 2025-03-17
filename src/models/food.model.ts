import mongoose, { Schema } from "mongoose";

type FoodSchemaType = {
  categoryName: string;
};

const FoodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<FoodSchemaType>("Food", FoodSchema);
