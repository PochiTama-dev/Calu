import React from 'react'
import "./header.css"
import miImagen from "../Header/logocalu.png"


export const Header = () => {
  return (
    <header className="navBar">
        <div>
        <img className='logoCalu' src={miImagen} alt="Logo Calu" />
        </div>
    </header>
  )

   

    
}
