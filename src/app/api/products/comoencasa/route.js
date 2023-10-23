import mongoDbConnect from "@/lib/mongoose";
import { ComoEnCasaProduct } from "@/models/products/comoencasaProduct";

export const GET = async (request) => {
  try {
    await mongoDbConnect();
    const data = await ComoEnCasaProduct.find();
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (request) => {
  try {
    const { title, description, urlImage, price } = await request.json();
    const productDoc = await ComoEnCasaProduct.create({
      title,
      description,
      urlImage,
      price,
    });
    const saveProduct = await productDoc.save();
    return Response.json({ message: "mensaje enviado a mongodb", saveProduct });
  } catch (error) {
    console.error(error);
  }
};
