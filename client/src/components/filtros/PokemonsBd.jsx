import React from 'react';

import { useSelector} from 'react-redux';
import PokemonCard from '../pokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
import Spiner from '../spinner/Spiner';
//import css
import '../pokemons/Pokemons.css';


export default function PokemonsBd() {

  

    const mostrar = useSelector(state => state.mostrar)
    const loading = useSelector(state => state.loading)
    const porPage = useSelector(state => state.porPage)
    const pagina = useSelector(state => state.pagina)
    const mostrarPag = pagina === 1 ? mostrar.slice(0, porPage + 9) : mostrar.slice(porPage, porPage + 12)
  

    return (
        <div>
            <div className="pokemon_container">
                {   
                    

                    loading.loading ? <Spiner /> :
                    mostrarPag.map(pokemon => (
                        <Link to={`/Detail/${pokemon.id}`} className="link" >
                        <PokemonCard img={pokemon.img} name={pokemon.name} type={pokemon.types} id={pokemon.id} atack={pokemon.atack} hp={pokemon.hp} />
                        </Link>
                    ))  
                    
                }

            </div>



        </div>
    )




}