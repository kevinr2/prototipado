import { NavbarDash } from "@/components/NavbarDash";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Dashboard() {
  return (
    <div>
      <NavbarDash />
      <div className="w-[100%] h-[350px] flex justify-center items-center mt-1">
        <Image
          src="https://res.cloudinary.com/deo6m0eyk/image/upload/f_auto,q_auto/g3agrl6xgppbmvbvskhy"
          className="w-[100%] h-[350px] object-fill"
          width={1000}
          height={1000}
          alt="cocora"
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
    </div>
  );
}
