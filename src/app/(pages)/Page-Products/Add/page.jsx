"use client";
import FormProducts from "@/components/FormProducts";
import BtnPush from "@/components/common/Btn-push";
import { usePathname } from "next/navigation";

const PageProductsAdd = () => {
  const pathname = usePathname();
  return (
    <section className=" flex-col  ">
      <div className=" flex justify-between">
        <h1>Anadir producto</h1>
        <BtnPush nameBtn="Volver" linkBtn={pathname} />
      </div>
      <FormProducts />
    </section>
  );
};

export default PageProductsAdd;
