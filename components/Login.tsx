"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="bg-[#222] h-screen flex flex-col items-center 
    justify-center text-center"
    >
      <Image src={"/assets/logo.png"} width={150} height={150} alt={"logo"} />
      <button
        onClick={() => signIn("google")}
        className="text-gray-200 font-bold text-xl animate-pulse"
      >
        Sign In to use Carlos-IA
      </button>
    </div>
  );
};
export default Login;
