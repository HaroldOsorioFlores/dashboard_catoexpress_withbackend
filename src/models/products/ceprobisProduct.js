import mongoose, { model, models, Schema } from "mongoose";

const CeprobisProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    urlImage: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const CeprobisProduct = models.CeprobisProduct || model("CeprobisProduct", CeprobisProductSchema);
