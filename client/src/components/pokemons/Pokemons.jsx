import React from 'react';

import { useSelector} from 'react-redux';
import PokemonCard from '../pokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
//import css
import './Pokemons.css'


export default function Pokemons() {

    

    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)


/*     useEffect(() => {
        if (!pokemons.length && !loading.loading) {
            dispatch(getPokemon())
        }
    })
 */
    return (
        <div>
            <div className="pokemon_container">
                {loading.loading ? <h1>Loading...</h1> :
                    pokemons.map(pokemon => (
                        <Link to={`/Detail/${pokemon.id}`} className="link" >
                        <PokemonCard img={pokemon.img} name={pokemon.name} type={pokemon.types} id={pokemon.id} />
                        </Link>
                    ))
                    
                }
            </div>



        </div>
    )




}