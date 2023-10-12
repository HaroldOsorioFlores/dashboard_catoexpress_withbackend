import mongoose from "mongoose";

const mongoDbConnect = async () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error(" MongoDB URI is required for MongoDB connections");
  }

  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("Connected to MongoD");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default mongoDbConnect;
