"use client";
import FormProducts from "@/components/FormProducts";
import BtnPush from "@/components/common/Btn-push";
import { usePathname, useRouter } from "next/navigation";

const PageProductsAdd = () => {
  const pathname = usePathname();
  console.log("Pagina de regreso: ", pathname)
  return (
    <section className="  flex flex-col gap-7 ">
      <div className="  flex flex-col gap-5">
        <BtnPush nameBtn="Volver" />
        <h1>Anadir producto</h1>
      </div>
      <FormProducts apiProducShop="cholo" uploadPreset="elcholo"/>
    </section>
  );
};

export default PageProductsAdd;
