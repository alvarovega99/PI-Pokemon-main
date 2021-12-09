import React from 'react';
import { useSelector }from 'react-redux';
import PokemonCard from '../pokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
//import css
import '../pokemons/Pokemons.css';


export default function Busqueda() {

    

    const buscado = useSelector(state => state.busqueda)
    const loading = useSelector(state => state.loading)



    return (
        <div>
            <div className="resultado-busqueda">
                {loading.loading ? <h1>Loading...</h1> :
                buscado !== "no hay resultados" ?
                        <Link to={`/Detail/${buscado.id}`} className="link" >
                            <PokemonCard img={buscado.img} name={buscado.name} type={buscado.types} id={buscado.id} hp={buscado.hp} atack={buscado.atack}/>
                        </Link>
                    :
                    <h1>No hay resultados</h1>
                }
            </div>



        </div>
    )




}