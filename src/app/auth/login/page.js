import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          src="https://images.pexels.com/photos/12470921/pexels-photo-12470921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Placeholder Image"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label className="block text-gray-600">
              Correo
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"         
            />
          </div>

          <div className="mb-4">
            <label  className="block text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
    
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label  className="text-gray-600 ml-2">
              Recordarme
            </label>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Olvide la contraseña
            </a>
          </div>
          
          <Link href="/dashboard">
            <button
            
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </Link>
        </form>

        <div className="mt-6 text-blue-500 text-center">
          <Link href="register" className="hover:underline">
            Registarme
          </Link>
        </div>
      </div>
    </div>
  );
}
