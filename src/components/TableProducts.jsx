import { useState, useEffect } from "react";
import axios from "axios";

const TableProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    return await axios
      .get("/api/product")
      .then((response) => setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className="text-xl">Productos</h2>
      <table>
        <thead>
          <tr>
            <td>Producto</td>
            <td>Descripcion</td>
            <td>Precio</td>
            <td>Opciones</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
