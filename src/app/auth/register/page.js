import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function register() {
  return (
     <div className="bg-gray-100 flex justify-center items-center h-[100vh] overflow-hidden">

    <div className="w-1/2 h-screen hidden lg:block">
      <Image src="https://res.cloudinary.com/deo6m0eyk/image/upload/f_auto,q_auto/afwjup30tnrgrjndqwoh" alt="Placeholder Image" width={800} height={800} className="object-cover w-full h-full" />
    </div>
    
    <div className="lg:p-36 md:p-52 sm:20 p-8  w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Registrarme</h1>
      <form action="#" method="POST">
    
        <div className="mb-4">
          <label  className="block text-gray-600">User</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-600">Correo</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-600">Edad</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-600">Nacionalidad</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label  className="block text-gray-600">Contraseña</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
        
        <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label  className="text-gray-600 ml-2">
              acepto los terminos y condiciones.
            </label>
          </div>
    
    
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Registrarme</button>
      </form>
    
      <div className="mt-6 text-blue-500 text-center">
        <Link href="login" className="hover:underline">Login</Link>
      </div>
    </div>
    </div>
  )
}
