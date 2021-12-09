import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
import {  useDispatch } from 'react-redux';
import { volver} from "../../redux/actions";

export default function Nav() {

    const dispatch = useDispatch();


    return (
        <div>
            <div className="navContainer">
                <div className="logoclima">
                    <Link to='/home' className="titulo">
                        <h1 className="titulo"><span className="span"></span>Pokemon</h1>
                    </Link>
                </div>

        
                <div>
                    <Link to='/home' className="link-nav">
                        <span onClick={() => dispatch(volver())} >Home</span>
                    </Link>
                    <Link to='/Create' className="link-nav">
                        <span >Crear Pokemon</span>
                    </Link>
                </div>
                <Link to='/Home' className="link">
                    
                        <button  className="boton-volver" onClick={() => dispatch(volver())}>Volver</button>
                
                </Link>
            </div>
       

        </div>
   
    );
};
