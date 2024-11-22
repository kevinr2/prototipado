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
          <Image src="images/colombia1.jpg" width={500} height={500} alt="Playa" />
        </div>
        <div className="circle-image">
          <Image src="images/images.jfif" width={500} height={500} alt="Bandera de Colombia" />
        </div>
      </div>
    </div>
  )
}
