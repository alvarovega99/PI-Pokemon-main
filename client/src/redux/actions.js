import axios from "axios";
//get 
export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKEMON_TYPE = "GET_POKEMON_TYPE";
export const RESET = "RESET";
export const POKEMONS_BD = "POKEMONS_BD";
export const POKEMONS_API = "POKEMONS_API";
//post
export const CREATE_POKEMON = "CREATE_POKEMON";
//bandera para verificar si carga 
export const LOADING = "LOADING";
//eliminar el resultado de las busquedas
export const VOLVER = "VOLVER";
//filtros y ordenamientos 
export const ORDER_ALPHABETIC = "ORDER_ALPHABETIC";
export const ORDER_NUMERIC = "ORDER_NUMERIC";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_ATACK = "FILTER_ATACK";
export const FILTER_DEFENSE = "FILTER_DEFENSE";
export const PAGINA_ANTERIOR = "PAGINA_NTERIOR";
export const PAGINA_SIGUIENTE = "PAGINA_SIGUIENTE";
export function getPokemon() {
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Pokémons...' })
        return axios.get('http://localhost:3001/pokemons')
            .then(res => res.data)
            .then(data => dispatch({ type: GET_POKEMON, payload: data }))
    }
}

export function searchName(name) {
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Pokémons...' })
        return axios.get(`http://localhost:3001/pokemons?name=${name}`)
            .then(res => res.data)
            .then(data => dispatch({ type: GET_POKEMON_NAME, payload: data }))
    }
}






export function searchId(id) {
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Pokémons...' })
        return axios.get(`http://localhost:3001/pokemons/${id}`)
            .then(res => res.data)
            .then(data => dispatch({ type: GET_POKEMON_ID, payload: data }))
    }
}

export function createPokemon(pokemon) {
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Creando Pokémon...' })
        const res = await axios.post('http://localhost:3001/pokemons', pokemon);
        const data = res.data;
        return dispatch({
            type: CREATE_POKEMON,
            payload: data
        });
    }
}

export function getTypes() {
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Tipos...' })
        return axios.get('http://localhost:3001/types')
            .then(res => res.data)
            .then(data => dispatch({ type: GET_POKEMON_TYPE, payload: data }))
    }
}

export function volver() {
    return{ type: VOLVER, payload: 'VOLVER AL HOME'} 
}


export function orderAlphabetical(tipo){
    return { type: ORDER_ALPHABETIC, payload: tipo}
}

export function resetMensaje(){
    return {type: RESET , payload: 'RESET'}
}

export function pokomonBd(){
    return {type: POKEMONS_BD, payload: 'Cargando Pokémons...'}
}
export function filterType(tipo){
    return {type: FILTER_TYPE, payload: tipo}
}
export function pokemonApi(){
    return {type: POKEMONS_API, payload: 'Filtrando api...'}    
}

export function filterAtack(atack){
    return {type: FILTER_ATACK, payload: atack}
}

export function paginaSiguiente(){
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Tipos...' })
        return dispatch({type: PAGINA_SIGUIENTE, payload: 'Pagina siguiente...'})
    }
}

export function paginaAnterior(){
    return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Tipos...' })
        return dispatch({type: PAGINA_ANTERIOR, payload: 'Pagina anterior...'})
    }
}

