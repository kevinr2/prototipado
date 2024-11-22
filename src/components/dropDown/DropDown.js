import React from "react";
import { ItemDrop } from "./ItemDrop";
import Link from "next/link";

export const DropDown = () => {
  return (
    <div className="absolute right-0 z-20 w-56 py-2 mt-60 mr-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-sky-900">
      <ItemDrop title="Perfil" />
      <ItemDrop title="Numeros de emergencia" />
      <ItemDrop title="Boton de panico" />
      <hr className="border-gray-200 dark:border-gray-700 " />
      <Link href="/">
        <ItemDrop title="Cerrar session" />
      </Link>
    </div>
  );
};
