"use client";

import "normalize.css/normalize.css";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="bg-sky-700 w-screen h-screen flex flex-col items-center justify-center">
          <button
            className="rounded-md bg-white p-2 "
            onClick={() => signIn("google")}
          >
            Iniciar Sesion
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      {session.user.email}
      <button onClick={() => signOut()}>Cerrar Sesion</button>
    </div>
  );
}
