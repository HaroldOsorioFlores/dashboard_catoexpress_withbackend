"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PageLogin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <div>
          <h1>Admin</h1>
          <button
            className="bg-lime-800 p-2 px-4 rounded-lg text-white shadow-lg"
            onClick={() => signIn("google")}
          >
            Iniciar Session
          </button>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
