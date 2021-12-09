import React from "react";
import Spiner from "../spinner/Spiner";
import "./prueba.css";
export default function Mensaje({ mensaje, name, life, attack, defense, speed, type}) {

    return (

        <div>
            <div className="active" id="mensaje">
                <div className="contenido">

                    <div className="forma">
                        <h1 className="ventana-titulo">Error</h1>
                        <div className="cuerpo-mensaje">
                            <p>El pokemon ya existe</p>
                     
                        </div>

                    </div>
                    <Spiner />       
                    <button type= "button" onClick={ 
                        
                        () => {
                            const sele = document.getElementById("mensaje");
                            sele.classList.add("creado");
                        }

                    } className="boton-aceptarform">Aceptar</button>
                    
                </div>
            </div>

        </div>


    )

}