import Image from 'next/image'
import React from 'react'

export const MenuComida = () => {
  return (
    <div>
        <div className="w-[100%] h-[50vh] flex justify-evenly ">
            <div className="w-72 h-28">
            <div className="product">
                    <Image src="img/lulo.jfif" alt="Product Image"  width={200} height={200}/>
                    <h2>Lulada</h2>
                    <p>Precio Promedio $1.5 USD - $2.5 USD</p>
            </div>
            </div>
            <div className="w-72 h-28">
            <div className="product">
                    <Image src="img/sopa.jpg" alt="Product Image"  width={200} height={200}/>
                    <h2>Sancocho</h2>
                    <p>Precio Promedio $1 USD - $1.5 USD</p>
            </div>
            </div>
            <div className="w-72 h-28">
            <div className="product">
                    <Image src="img/lulo.jfif" alt="Product Image"  width={200} height={200}/>
                    <h2>Lulada</h2>
                    <p>Precio Promedio $1.5 USD - $2.5 USD</p>
            </div>
            </div>
        </div> 
     
    </div>
  )
}
