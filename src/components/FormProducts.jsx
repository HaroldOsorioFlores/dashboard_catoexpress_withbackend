import BtnPush from "./common/Btn-push";

const FormProducts = () => {
  return (
    <form>
      <label htmlFor="nameProduct">Titulo del producto</label>
      <input
        id="nameProduct"
        type="text"
        placeholder="Sandwich"
        name="nameProduct"
      />
      <label>Descripcion del producto</label>
      <textarea placeholder="Hambugersa con triple queso" />
      <label htmlFor="priceProduct">Precio del producto</label>
      <input
        id="priceProduct"
        type="number"
        placeholder="S/. 3.00"
        name="priceProduct"
      />
      <BtnPush btnType="submit" nameBtn="Guardar" />
    </form>
  );
};

export default FormProducts;
