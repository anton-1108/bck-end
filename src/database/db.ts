import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDb tei amijilttai holbogdloo");
  } catch (error) {
    console.log("MongoDb te holbogdohod aldaa garlaa");
  }
};
