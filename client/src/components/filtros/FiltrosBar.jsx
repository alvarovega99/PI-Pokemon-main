import React, { useEffect } from "react";
import Searchbar from "../searchBar/Searchbar";

import { useSelector, useDispatch } from 'react-redux';
import { volver, orderAlphabetical, pokomonBd, getTypes, filterType, pokemonApi, filterAtack, paginaSiguiente, paginaAnterior } from "../../redux/actions";
import './filtros1.css'
import './ventana-filtros.css'



export default function BarFiltros() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const types = useSelector(state => state.tipos);
    const buscado = useSelector(state => state.busqueda);
    const prueba = useSelector(state => state.prueba);
    const pagina = useSelector(state => state.pagina);
    useEffect(() => {
        if (!types.length && !loading.loading) {
            dispatch(getTypes())
        }

    })
    var tip = '';

    const filtrar = (e) => {
        tip = e.target.value;
        console.log(tip);
    }
    const filtrarPokemon = (e) => {
        e.preventDefault();
        dispatch(filterType(tip))

    }


    return (


        <div>
            <div className="contenedor-filtros1">
                <div >
                    <button className="boton-filtros"  onClick={                                   
                    () => {
                        const modal = document.getElementById("ventana-filtros");
                        modal.classList.toggle("mostrar");
                                    }}>Filtros</button>
                </div>

                <div className="busqueda">
                    <Searchbar />
                </div>
                <div className="paginacion">
                    <span>P-{pagina}</span>
                    <div>
                        <button onClick={() => dispatch(paginaAnterior())} className="boton-pag"> Anterior </button>
                        <button onClick={() => dispatch(paginaSiguiente())} className="boton-pag">Siguiente </button>
                    </div>
                </div>


            </div>
            <div className="ventana-filtros" id="ventana-filtros">
                <div className="contenido-filtros">
                    
                    <button onClick={                                   
                    () => {
                        const modal = document.getElementById("ventana-filtros");
                        modal.classList.toggle("mostrar");
                                    }} className="boton-cerrar-fil">x</button>
                    <h2>Filtros</h2>
                    <h3>Ordenar por ataque:</h3>
                    <button className="botones-fil"  onClick={() => dispatch(filterAtack('Debiles'))} >Debiles</button>
                    <button className="botones-fil" onClick={() => dispatch(filterAtack('Fuertes'))}>Fuertes</button>

                    {/* Traer pokemons de base de datos */}
                    {buscado.length === 0 ?
                        <div className="bd-api">
                            <h3>Pokemons Originales o creados</h3>
                            <button className="botones-fil" onClick={() => dispatch(pokomonBd())}>Pokemons Creados</button>
                            <button className="botones-fil" onClick={() => dispatch(pokemonApi())}>Pokemons Originales</button>
                        </div>
                        : null}

                    {/* filtrar por tipos */}
                    {buscado.length === 0 ?
                        <form className="ordenar-tipos">
                            <h3>Filtrar por tipo</h3>
                            <select className="select-filtros"name="tipos" id="seleccion" placeholder="hola" onChange={filtrar} value="tipos"> 
                                <option selected>Seleccione un tipo</option>
                                {
                                    types.map(tipo =>
                                        <option value={tipo.name} onChange={filtrar}>{tipo.name}</option>
                                    )
                                }

                            </select>
                            <button className="botones-fil" type="reset" value="reset" onClick={filtrarPokemon}
                            > buscar</button>
                        </form>
                        : null}

                    {buscado.length === 0 & prueba.length === 0 ?
                        <div className="alfabeto">
                            <h3>Ordenar por nombre:</h3>
                            <button className="botones-fil" onClick={() => dispatch(orderAlphabetical('A-Z'))}>A-Z</button>
                            <button className="botones-fil" onClick={() => dispatch(orderAlphabetical('Z-A'))}>Z-A</button>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};