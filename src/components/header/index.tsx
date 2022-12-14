import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex py-4 px-8 flex-row justify-between">
      <div className="flex  justify-center items-center">
        <Image
          quality={100}
          width={50}
          height={50}
          src={logo}
          alt="Logo"
          className="mr-6"
        />
        <h1 className="text-ignite-500 text-3xl font-bold leading-tight">
          WHAT'S IN YOUR FRIDGE?
        </h1>
      </div>
      <div className="items-center  flex justify-between hover:underline hover:cursor-pointer">
        <a className="text-gray-900">Log In</a>
      </div>
    </header>
  );
}
