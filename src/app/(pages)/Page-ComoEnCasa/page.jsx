"use client";
import TableProducts from "@/components/TableProducts";
import BtnPush from "@/components/common/Btn-push";

const PageComoEnCasa = () => {
  return (
    <section className=" flex flex-col gap-7 ">
      <section className="flex  justify-between">
        <h1>Como en Casa</h1>
        <BtnPush linkBtn="/Page-Products/Add?page=comoencasa" nameBtn="Nuevo producto" />
      </section>
      <section>
        <TableProducts apiUrl="comoencasa" />
      </section>
    </section>
  );
};
export default PageComoEnCasa;
