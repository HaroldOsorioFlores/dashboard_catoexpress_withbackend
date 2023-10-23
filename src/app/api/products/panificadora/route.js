import { PanificadoraUcsmProduct } from "@/models/products/panificadoraucsmProduct";
import mongoDbConnect from "@/lib/mongoose";

export const GET = async (request) => {
  try {
    await mongoDbConnect();
    const data = await PanificadoraUcsmProduct.find();
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (request) => {
  try {
    const { title, description, urlImage, price } = await request.json();
    const productDoc = await PanificadoraUcsmProduct.create({
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
