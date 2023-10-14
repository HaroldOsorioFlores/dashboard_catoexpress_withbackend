import { Product } from "@/models/product";
import mongoDbConnect from "@/lib/mongoose";

export const GET = async (request) => {
  try {
    await mongoDbConnect();
    const data = await Product.find();
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (request) => {
  try {
    const { title, description, price } = await request.json();
    const productDoc = await Product.create({ title, description, price });
    const saveProduct = await productDoc.save();
    return Response.json({ message: "mensaje enviado a mongodb", saveProduct });
  } catch (error) {
    console.error(error);
  }
};
