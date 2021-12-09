import React from 'react';

import { useSelector} from 'react-redux';
import PokemonCard from '../pokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
//import css
import '../pokemons/Pokemons.css';


export default function PokemonsApi() {

  

    const Pokemonsapi = useSelector(state => state.pokemonsApi);
    const loading = useSelector(state => state.loading)


    return (
        <div>
            <div className="pokemon_container">
                {loading.loading ? <h1>Loading...</h1> :
                    Pokemonsapi.map(pokemon => (
                        <Link to={`/Detail/${pokemon.id}`} className="link" >
                        <PokemonCard img={pokemon.img} name={pokemon.name} type={pokemon.types} id={pokemon.id} />
                        </Link>
                    ))
                    
                }
            </div>



        </div>
    )



}