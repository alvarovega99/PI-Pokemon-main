import {
  GET_POKEMON, GET_POKEMON_ID, GET_POKEMON_NAME, GET_POKEMON_TYPE, LOADING, CREATE_POKEMON, VOLVER,
  ORDER_ALPHABETIC,  FILTER_TYPE, FILTER_ATACK,  RESET, POKEMONS_BD, POKEMONS_API,
  PAGINA_SIGUIENTE, PAGINA_ANTERIOR
} from './actions';


const initialState = {
  mostrar:[],
  pokemons: [],
  busqueda: [],

  loading: {
    loading: false,
    msg: ''
  },
  tipos: [],
  prueba: [],
  porPage: 0,
  pagina:1,
  mensaje: ''
};


function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        mostrar: action.payload,
        loading: {
          loading: false,
          msg: ''
        }
      }
    case LOADING:
      return {
        ...state,
        loading: {
          loading: true,
          msg: action.payload
        },
      }
    case GET_POKEMON_ID:
      return {
        ...state,
        busqueda: 
        action.payload ?
        action.payload :
        'no hay resultados', 
        loading: {
          loading: false,
          msg: ''
        }
      }
    case GET_POKEMON_NAME:
      return {
        ...state,
        busqueda: 
        action.payload ?
        action.payload :
        'no hay resultados', 
        loading: {
          loading: false,
          msg: ''
        }
      }
    case GET_POKEMON_TYPE:
      return {
        ...state,
        tipos: action.payload,
        loading: {
          loading: false,
          msg: ''
        }
      }
    case CREATE_POKEMON:
      return {
        ...state,
        mostrar: typeof(action.payload) === Object ? state.mostrar.push(action.payload) : state.mostrar,
        mensaje: action.payload,
        loading: {
          loading: false,
          msg: ''
        }

      }
    case RESET:
      return {
        ...state,
        mensaje: '',
        loading: {
          loading: false,
          msg: ''
        }
      }

    case ORDER_ALPHABETIC:
      return {
        ...state,
        mostrar:
          action.payload === 'A-Z' ?
            state.mostrar.sort((a, b) => {
              return a.name > b.name ? 1 : -1
            })
            :
            state.mostrar.sort((a, b) => {
              return a.name < b.name ? 1 : -1
            }),

        loading: {
          loading: false,
          msg: ''
        }
      }
    case POKEMONS_BD:
      return {
        ...state,
        mostrar: state.pokemons.filter(pokemon => pokemon.id.length > 3),
        loading: {
          loading: false,
          msg: ''
        }
      }
    case POKEMONS_API:
      return {
        
        ...state,
        mostrar: state.pokemons.filter(pokemon => !isNaN(pokemon.id)),
        loading: {
          loading: false,
          msg: ''
        }
      }
    case FILTER_TYPE:
      return {
        ...state,
        mostrar: 
        
        state.pokemons.filter((poke) => {
          return poke.types.some((t) => t.name === action.payload);
        })
        ,
      

        loading: {
          loading: false,
          msg: ''
        }
      }
    case VOLVER:
      return {
        ...state,
        mostrar: state.pokemons,
        busqueda: [],
        prueba: [],
        pokemonsBD: [],
        pokemonsApi: [],
        pagina: 1,
        porPage: 0,
        loading: {
          loading: false,
          msg: ''
        }
      }
    case FILTER_ATACK:
      return {
        ...state,
        mostrar:
        action.payload === 'Debiles' ?
        state.mostrar.sort((a, b) => {
        return a.atack > b.atack ? 1 : -1
        })
        :
        state.mostrar.sort((a, b) => {
          return a.atack < b.atack ? 1 : -1
        }),
        loading: {
          loading: false,
          msg: ''
        }
      }
    case PAGINA_SIGUIENTE:
      return {
        ...state,
        pagina: state.porPage < state.mostrar.length-12 ?  
        state.pagina + 1: state.pagina,

        porPage: 
          state.porPage < state.mostrar.length-12 ?  
            state.porPage + 12
            :
            state.porPage,
        loading: {
          loading: false,
          msg: ''
        }
      }
    case PAGINA_ANTERIOR:
      return {
        ...state,
        pagina: state.pagina > 1 ? state.pagina - 1 : state.pagina,
        porPage: state.porPage  > 12 ? state.porPage - 12 : 0,

        loading: {
          loading: false,
          msg: ''
        }
      }

    default:
      return state;
  }
}

export default Reducer;