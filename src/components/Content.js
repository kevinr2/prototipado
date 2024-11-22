import Image from 'next/image'
import React from 'react'

export const Content = () => {
  return (
    <div className="hero-container mx-32 mt-10">
      <div className="hero-text">
        <h1>
          Vive la <span className="highlight-pink">aventura</span> de tus sueños,
          con la <span className="highlight-yellow">seguridad</span> que
          mereces
        </h1>
        <p>La vida es corta y el mundo es amplio. Viaja seguro y comienza a descubrirlo.</p>

      </div>
      <div className="hero-images">
        <div className="main-image">
          <Image src="https://images.pexels.com/photos/12470921/pexels-photo-12470921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} alt="Playa" />
        </div>
        <div className="circle-image">
          <Image src="https://res.cloudinary.com/deo6m0eyk/image/upload/f_auto,q_auto/eozv9og5yjelixekjmoc" width={500} height={500} alt="Bandera de Colombia" />
        </div>
      </div>
    </div>
  )
}
