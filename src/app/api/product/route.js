import { Product } from "@/models/product";
import mongoDbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoDbConnect();
    const { title, description, price } = await request.json();
    const productDoc = await Product.create({ title, description, price });
    const saveProduct = await productDoc.save();
    console.log(productDoc);
    return Response.json({ message: "mensaje enviado a mongodb", saveProduct });
  } catch (error) {
    console.error(error);
  }
}
