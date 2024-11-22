import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CardsMenu = ({title,description,img}) => {
  return (
    <>
   <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl mb-4">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <Image className="h-48 w-full object-cover md:w-48" src={`img/${img}`} width={200} height={200} alt="Image" />
    </div>
    <div className="p-7">
      <div className="uppercase tracking-wide text-base text-sky-700 font-semibold">{title}</div>
      <p className="mt-2 text-gray-500">{description}</p>
      <div className="mt-4">
        <Link href="/ciudad" >
          <button className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900 focus:outline-none">Conocer</button>
        </Link>
      </div>
    </div>
  </div>
</div>

    </>

  )

}
