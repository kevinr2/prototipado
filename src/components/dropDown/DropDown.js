import React from "react";
import { ItemDrop } from "./ItemDrop";
import Link from "next/link";

export const DropDown = ({setModal}) => {
  return (
    <div className="absolute right-0 z-20 w-56 py-2 mt-40 mr-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-sky-900">   
      <div onClick={()=>setModal(true)}>
        <ItemDrop title="Boton de panico" />
      </div>
      <hr className="border-gray-200 dark:border-gray-700 " />
      <Link href="/">
        <ItemDrop title="Cerrar session" />
      </Link>
    </div>
  );
};
