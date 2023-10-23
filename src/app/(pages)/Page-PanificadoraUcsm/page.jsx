"use client";
import TableProducts from "@/components/TableProducts";
import BtnPush from "@/components/common/Btn-push";

const PagePanificadoraUcsm = () => {
  return (
    <section className=" flex flex-col gap-7 ">
      <section className="flex  justify-between">
        <h1>Panificadora UCSM</h1>
        <BtnPush linkBtn="/Page-Products/Add?page=panificadora" nameBtn="Nuevo producto" />
      </section>
      <section>
        <TableProducts apiUrl="panificadora" />
      </section>
    </section>
  );
};
export default PagePanificadoraUcsm;
