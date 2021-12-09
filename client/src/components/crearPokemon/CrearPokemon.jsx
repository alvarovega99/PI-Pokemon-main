import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes, resetMensaje } from "../../redux/actions";
import Nav from "../navBar/Nav";
import "./crearPokemon.css";
import Mensaje from "./puebaSelect";
import { useHistory } from 'react-router-dom';
import Spiner from '../spinner/Spiner';
export default function CrearPokemon() {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.tipos);
    const loading = useSelector((state) => state.loading);
    const mensaje = useSelector((state) => state.mensaje);
    const history = useHistory();
    
    useEffect(() => {
        if (!types.length && !loading.loading) {
            dispatch(getTypes())
        }

    })

    



    const [datos, setDatos] = useState({
        name: '',
        img: '',
        life: 0,
        atack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
    });

    const eliminarSeleccion = (array, sel) => {
        if (array.includes(sel)) {
            const array1 = array.filter(num => num !== sel)
            return array1
        } else {
            const array2 = array.concat(sel)
            return array2
        }

    }


    
/*     const alert = (men, tip ) => {
        return(
            <div>
            <div className="active" id="mensaje">
                <div className="contenido">

                    <div className="forma">
                        <h1 className="ventana-titulo">{tip}</h1>
                        <div className="cuerpo-mensaje">
                            <p>{men}</p>
                     
                        </div>

                    </div>
                                
                    <button type= "button" onClick={ 
                        
                        () => {
                            const sele = document.getElementById("mensaje");
                            sele.classList.toggle("creado");
                        }

                    } className="boton-aceptarform">Aceptar</button>
                    
                </div>
            </div>

        </div>

        )
    }
 */
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        datos.name ? dispatch(createPokemon(datos)) : alert("Por favor ingrese un nombre") 
        //dispatch(createPokemon(datos));

        setDatos({
            name: '',
            img: '',
            life: 0,
            atack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            types: [],
        });
        console.log(datos)
        console.log(mensaje)
    }
    const handleType = (event) => {
        setDatos({

            ...datos,
            types: eliminarSeleccion(datos.types, event.target.value)
        });
    }



    useEffect(() => {
        if (mensaje === 'Pokemon Creado correctamente') {
            alert('Pokemón creado')
            history.push('/Home')
        } else if (mensaje === 'El pokemon ya existe') {
            alert('Pokemón ya existe')
            history.push('/Create')
        }
        dispatch(resetMensaje())
    }, [mensaje])

    return (
        <div>
            <Nav />
            {loading.loading ? <Spiner /> :
                <div className="contenedor">
                    <div className="imagen">
                        <img src="../../img/Charizard.png" alt="" />
                    </div>

                    <div className="formulario-crear">
                        <h1 className="titulo-crear">Crear Pokemon</h1>
                        <form onSubmit={e=> handleSubmit(e)}>
                            <div className="form-group">
                                <div className="campo">
                                    <label htmlFor="" className="label">Nombre:</label>
                                    <input type="text" name="name" placeholder="INGRESE NOMBRE" onChange={handleChange} value={datos.name} className="input-buscar" />
                                </div>
                                <div className="campo">
                                    <label htmlFor="" className="label">Imagen</label>
                                    <input type="url" name="img" placeholder="INGRESE IMAGEN" onChange={handleChange} value={datos.img} className="input-buscar" />
                                </div>

                                <div className="campo">
                                    <label htmlFor="" className="label">Vida:</label>
                                    <input type="text"  name="life" placeholder="INGRESE VIDA" onChange={handleChange} value={datos.life} className="input-buscar" />
                                </div>
                                <div className="campo">
                                    <label htmlFor="" className="label">Ataque:</label>
                                    <input type="text" name="atack" placeholder="INGRESE FUERZA" onChange={handleChange} value={datos.atack} className="input-buscar" />
                                </div>
                                <div className="campo">

                                    <label htmlFor="" className="label">Defensa:</label>
                                    <input type="text" name="defense" placeholder="INGRESE DEFENSA" onChange={handleChange} value={datos.defense} className="input-buscar" />

                                </div>
                                <div className="campo">
                                    <label htmlFor="" className="label">Velocidad:</label>
                                    <input type="text" name="speed" placeholder="INGRESE VELOCIDAD" onChange={handleChange} value={datos.speed} className="input-buscar" />
                                </div>
                                <div className="campo">
                                    <label htmlFor="" className="label">Altura:</label>
                                    <input type="text" name="height" placeholder="INGRESE ALTURA" onChange={handleChange} value={datos.height} className="input-buscar" />

                                </div>
                                <div className="campo">
                                    <label htmlFor="" className="label">Peso:</label>
                                    <input type="text" name="weight" placeholder="INGRESE PESO" onChange={handleChange} value={datos.weight} className="input-buscar" />
                                </div>

                            </div>
                            <div className="campo">

                                <label className="label">Tipos:</label>

                                <button type="button" className="boton-abrir" onClick={
                                    () => {
                                        const modal = document.getElementById("modal");
                                        modal.classList.toggle("active");
                                    }
                                }>Agegar tipos</button>

                                <div className="tec" id="modal">
                                    <div className="contenido">


                                        <div className="forma">
                                            <h1 className="ventana-titulo">Agregar tipos</h1>
                                            <div className="formulario-tipos">
                                                {types.map((e) => (
                                                    <div className="checkbox-seleccion">
                                                        <div className="check">
                                                            <input value={e.id} type="checkbox" onChange={handleType} />
                                                            {e.name}
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>

                                        </div>
                                        <button type="button" 
                                        onClick={
                                            () => {
                                                const modal = document.getElementById("modal");
                                                modal.classList.toggle("active");
                                            }
                                        }

                                         className="boton-aceptarform">Aceptar</button>

                                    </div>
                                </div>

                            </div>

                                   

                        <input type="submit" className="boton-crear" />


                        </form>

                        


                    </div>
                    
                </div>
                
            }
            
        </div >
    )
}