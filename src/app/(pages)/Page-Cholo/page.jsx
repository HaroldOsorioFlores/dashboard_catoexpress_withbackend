"use client";
import BtnPush from "@/components/common/Btn-push";
const PageElCholo = () => {
  return (
    <section className=" flex flex-col gap-7 ">
      <div className="flex  justify-between">
        <h1>El Cholo</h1>
        <BtnPush linkBtn="/Page-Products/Add" nameBtn="Nuevo producto" />
      </div>
      <div>
        <h2 className="text-xl">Productos</h2>
      </div>
    </section>
  );
};
export default PageElCholo;
