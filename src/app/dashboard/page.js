import { NavbarDash } from "@/components/NavbarDash";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GiMeatCleaver } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { GiPassport } from "react-icons/gi";
import { CardsMenu } from "@/components/CardsMenu";
import { ModalEmer } from "@/components/ModalEmer";

export default function Dashboard() {
  
  return (
    <div>
      <NavbarDash />
      <div className="w-[100%] h-[350px] flex justify-center items-center mt-1">
        <Image
          src="https://res.cloudinary.com/deo6m0eyk/image/upload/f_auto,q_auto/g3agrl6xgppbmvbvskhy"
          className="w-[100%] h-[360px] object-fill"
          width={1000}
          height={1000}
          alt="cocora"
          priority
        />
        <div className="absolute w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl mt-40">
          <div className="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
            <CiSearch />
            <input
              className="pl-3 block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Find anything..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-14 text-center mb-40">
        <div className="flex flex-col  items-center gap-2 text-red-500 hover:text-red-300 cursor-pointer">
          <BiSolidPlaneAlt style={{ fontSize: 50, marginBottom: 10 }} />
          <h1>Tiquetes</h1>
        </div>
        <div className="flex flex-col  items-center gap-2 text-red-500 hover:text-red-300 cursor-pointer">
          <GiMeatCleaver style={{ fontSize: 50, marginBottom: 10 }} />
          <h1>Gastronomia</h1>
        </div>
        <div className="flex flex-col  items-center gap-2 text-red-500 hover:text-red-300 cursor-pointer">
          <FaHotel style={{ fontSize: 50, marginBottom: 10 }} />
          <h1>Hoteles</h1>
        </div>
        <div className="flex flex-col  items-center gap-2 text-red-500 hover:text-red-300 cursor-pointer">
          <GiPassport style={{ fontSize: 50, marginBottom: 10 }} />
          <h1>Turismo</h1>
        </div>
      </div>
      <div className=" w-[100%] h-[400px] flex justify-center items-center">
        <div className="">
          <CardsMenu  title="Cali" description="Está ubicada en el departamento del Valle del Cauca, y tiene un clima cálido y seco. El río Cauca es el principal río de la ciudad y el departamento" img="cali.jpg"/>
          <CardsMenu  title="Medellin" description="Está ubicada en el noroccidente de Colombia, en el Valle del Aburrá, y es conocida como la “Ciudad de la eterna primavera” por su clima." img="medellin.jpg"/>
          <CardsMenu  title="Cartagena" description="Cartagena de Indias es una ciudad colombiana, ubicada en el norte del país, a orillas del Mar Caribe y capital de la región de Bolívar. Es un destino turístico de gran importancia en Colombia, el Caribe y el mundo" img="cartagena.jpg"/>
        </div>
      </div>
     
    </div>
  );
}
