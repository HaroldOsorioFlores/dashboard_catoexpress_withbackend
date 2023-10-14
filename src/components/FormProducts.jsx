import BtnPush from "./common/Btn-push";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const FormProducts = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [file, setFile] = useState(null);

  const uploadImageData = () => {
    const formData = new FormData();
    formData.append("file", file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { title, description, price };
      await axios.post("/api/product", data);
      return console.log("Formulario exitoso");
    } catch (error) {
      return console.error("Error al enviar datos al servidor:", error);
    }
  };
  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="nameProduct">Titulo del producto</label>
        <input
          id="nameProduct"
          type="text"
          placeholder="Sandwich"
          name="nameProduct"
          className="p-2 max-w-md border-black border  rounded-md"
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Descripcion del producto</label>
        <textarea
          placeholder="Hambugersa con triple queso"
          className="p-2 max-w-md border-black border rounded-md"
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="priceProduct">Precio del producto</label>
        <input
          id="priceProduct"
          type="number"
          placeholder="S/. 3.00"
          name="priceProduct"
          className="p-2 max-w-md border-black border rounded-md"
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>

      <BtnPush btnType="submit" nameBtn="Guardar" />
    </form>
  );
};

export default FormProducts;
