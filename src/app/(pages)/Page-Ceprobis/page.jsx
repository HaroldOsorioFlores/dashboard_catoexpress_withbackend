"use client";

import TableProducts from "@/components/TableProducts";
import BtnPush from "@/components/common/Btn-push";

const PageCeprobis = () => {
  return (
    <section className=" flex flex-col gap-7 ">
      <section className="flex  justify-between">
        <h1>Ceprobis</h1>
        <BtnPush linkBtn="/Page-Products/Add?page=ceprobis" nameBtn="Nuevo producto" />
      </section>
      <section>
        <TableProducts apiUrl="ceprobis" />
      </section>
    </section>
  );
};
export default PageCeprobis;
