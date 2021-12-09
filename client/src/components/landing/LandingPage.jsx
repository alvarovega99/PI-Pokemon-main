import React from 'react'
import { Link } from 'react-router-dom'
import Bola from '../../img/pokeBoton.png'
import './landing.css';



export default function LandingPage() {

    return (

        <div className="contenedor-principal-lan">

            <div className="img-landing">
                <img src= "../../img/pokeLan.png" alt="" />
            </div>
            <div className="parte-derecha">
                
                <Link to="/Home">
                    <img className="imagen-izquierda" src= {Bola} alt="" />
                </Link>
        
            </div>
        </div>
        
    )
}



