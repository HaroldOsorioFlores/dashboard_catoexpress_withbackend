"use client";

import { usePathname, useRouter } from "next/navigation";

const BtnPush = ({ linkBtn, nameBtn, btnType }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() =>
        pathname.includes("/Page-Products/Add")
          ? router.back()
          : router.push(linkBtn)
      }
      className="bg-blue-700 text-white p-2 px-4 rounded-xl  h-10 max-w-max"
      type={btnType}
    >
      {nameBtn}
    </button>
  );
};
export default BtnPush;
