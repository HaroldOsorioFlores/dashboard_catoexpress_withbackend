import { useState, useEffect } from "react";
import axios from "axios";

const TableProducts = ({apiUrl}) => {
  const [products, setProducts] = useState([]);

  const fetchData = async (apiUrl) => {
    return await axios
      .get(`/api/products/${apiUrl}`)
      .then((response) => setProducts(response.data));
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);
  console.log(products);
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl">Productos</h2>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Descripcion
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Url Imagen
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {products.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-100 ">
                      <td className="px-6 py-4  text-sm font-medium text-gray-800 ">
                        {product.title}
                      </td>
                      <td className="px-6 py-4  text-sm font-medium text-gray-800 ">
                        {product.description}
                      </td>
                      <td className="px-6 py-4  text-sm font-medium text-gray-800 ">
                        {product.urlImage}
                      </td>
                      <td className="px-6 py-4  text-sm font-medium text-gray-800 ">
                        S/. {product.price}
                      </td>
                      <td className="px-6 py-4  text-sm font-medium text-gray-800 "></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProducts;
