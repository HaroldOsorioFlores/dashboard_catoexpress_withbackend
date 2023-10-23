"use client";
import TableProducts from "@/components/TableProducts";
import BtnPush from "@/components/common/Btn-push";
const PageElCholo = () => {
  return (
    <section className=" flex flex-col gap-7 ">
      <section className="flex  justify-between">
        <h1>El Cholo</h1>
        <BtnPush
          linkBtn="/Page-Products/Add?page=cholo"
          nameBtn="Nuevo producto"
        />
      </section>
      <section>
        <TableProducts apiUrl="cholo" />
      </section>
    </section>
  );
};
export default PageElCholo;
