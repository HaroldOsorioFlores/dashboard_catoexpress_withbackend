import mongoose, { model, models, Schema } from "mongoose";

const PanificadoraUcsmProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    urlImage: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const PanificadoraUcsmProduct =
  models.PanificadoraUcsmProduct ||
  model("PanificadoraUcsmProduct", PanificadoraUcsmProductSchema);
