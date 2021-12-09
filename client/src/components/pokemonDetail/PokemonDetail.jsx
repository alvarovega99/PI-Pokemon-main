import React,{useEffect} from 'react';
import { searchId } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../navBar/Nav';
import './pokemonDetail.css'
import Spiner from '../spinner/Spiner';
export default function PokemonDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const buscado = useSelector(state => state.busqueda);
    const loading = useSelector(state => state.loading);
    console.log(id);
    useEffect(() => {
        dispatch(searchId(id));
    }, [dispatch, id]);

    return (
        <div>
            <Nav/>
            {
            loading.loading ? <Spiner/> 
            :
            <div className="contenedor-pokemon">
                <div className ="pokemon-imagen">
                    <img src={buscado.img} className="img-list" alt=""/>
                </div>
                <div className="pokemon-contenido">
                    <h2 className="pokemon_nombre titi" >{buscado.name}</h2>
                    <h2 className="general-titulo">informacion general</h2>
                    <div className="informacion-general">
                    
                        <div className="general">
                            <h2>Peso: </h2>
                            <p>{buscado.weight} kg</p>
                        </div>
                        <div className="general">
                            <h2>Altura: </h2>
                            <p>{buscado.height} m</p>
                        </div>
                    </div>

                    <h2 className="general-titulo">Habilidades</h2>
                    <div className="habilidad">
                        <div>
                            <h3>Vida: </h3>
                            <progress className="progress" max="100" value={buscado.hp}/> 
                            <span>  {buscado.hp}</span>
                        </div>
                        <div>
                            <h3 className="habilidad-titulo">Ataque: </h3>
                            <div className="habilidades">
                                
                                <progress className="progress" max="150" value={buscado.atack}/>
                                <span> {buscado.atack}</span>                                
                            </div>
                        </div>
                        <div>
                            <h3 className="habilidad-titulo">Defensa: </h3>
                            <div className="habilidades">
                                
                                <progress className="progress" max="150" value={buscado.defense}/>
                                <span> {buscado.defense}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="habilidad-titulo">Velocidad: </h3>
                            <div className="habilidades">
                                
                                <progress className="progress" max="150" value={buscado.velocity}/>
                                <span> {buscado.velocity}</span>
                            </div>
                        </div>
                    </div>
                    <div className="tipos-detail">
                        <h2 className="general-titulo">Tipos:</h2>


                        <div className="tipos">
                            
                            {Array.isArray(buscado.types) ?
                            buscado.types.map(tipo => (
                                <h3 className="tipo-detail">{tipo.name}</h3>
                            ))
                            : 
                            buscado.types ? (<h3 className="tipo-detail">{buscado.types}</h3>) : (<h3 className="tipo-detail"> Sin Tipo</h3>)
                        }
                  
                        </div>
                    </div>


                    
           
         
                    
                    
                    
                    
                    

                    
        
                </div>
            </div>
    }
        </div>
    )
}