"use client";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { DropDown } from "./dropDown/DropDown";
import { useState } from "react";
import { ModalEmer } from "./ModalEmer";

export const NavbarDash = () => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false)
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-10 px-5 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl hover:text-cyan-500 text-sky-950 font-bold transition-colors cursor-pointer"
        >
          Colombia secure
        </Link>
        <div className="flex items-center gap-5">
          <h1>Bienvenido joe </h1>
          <div onClick={()=>setMenu(!menu)} className=" cursor-pointer">
            <FaRegUserCircle style={{ fontSize: 25 }} />
          </div>

          {menu=== true?<DropDown setModal={setModal} modal={modal} />:""} 
        </div>
      </div>
       {modal=== true ?<ModalEmer modal={modal} setModal={setModal} />:""}
    </div>
  );
};
