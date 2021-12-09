import React, { useEffect} from 'react';
import Nav from '../navBar/Nav'
import { useSelector, useDispatch } from 'react-redux';

import Busqueda from '../filtros/Busqueda';
import BarFiltros from '../filtros/FiltrosBar';
import PokemonsBd from '../filtros/PokemonsBd';


import { getPokemon } from '../../redux/actions'

//import css
import './home.css'

export default function Home() {
    const dispatch = useDispatch();
    const buscado = useSelector(state => state.busqueda);
    const loading = useSelector(state => state.loading);

    const pokemons = useSelector(state => state.pokemons);

    const mostrar = useSelector(state => state.mostrar);
    //eliminar la busdqueda
    
    
    useEffect(() => {
        if (!pokemons.length && !loading.loading) {
            dispatch(getPokemon())
        }
    })

    return (

        <div className="home">
            <Nav />
            <BarFiltros />

            {/* <BarFiltros/> */}
            {
                buscado.length !== 0 ?
                    
                    <Busqueda />
                    
                    :
                mostrar.length === 0 && !loading.loading ?
                    <h1>No se encontraron resultados</h1>
                :
                <PokemonsBd />
            }
            


{/*             {
                prueba.length > 0 ?
                    loading.loading ?
                        <h1>Loading...</h1> :
                        <Filtros />
                    :
                    buscado.length !== 0 ?
                        <Busqueda />
                    :
                    PokemonsBase.length !== 0 ?
                        <PokemonsBd />
                    :
                        PokemonsBase.length !== 0 ?
                        <PokemonsBd />
                    :
                    pokemonsApis.length > 0 ?
                        <PokemonsApi />
                    :
                    buscado.length === 0 && prueba.length === 0? 
                        <Pokemons />
                    :  null
            } */}



        </div>






    )




}








