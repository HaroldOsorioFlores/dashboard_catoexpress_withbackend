"use client";
import FormProducts from "@/components/FormProducts";
import BtnPush from "@/components/common/Btn-push";
import { usePathname } from "next/navigation";

const PageProductsAdd = () => {
  const pathname = usePathname();
  return (
    <section className="  flex flex-col gap-7 ">
      <div className="  flex flex-col gap-5">
        <BtnPush nameBtn="Volver" linkBtn={pathname} />
        <h1>Anadir producto</h1>
      </div>
      <FormProducts />
    </section>
  );
};

export default PageProductsAdd;
