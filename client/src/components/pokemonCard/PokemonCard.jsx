import React from 'react';
import './pokemoncard.css'
export default function PokemonCard({img, name, type, id, hp, atack}) {
    return (
    

        <div key={id} className={ `pokemon ${Array.isArray(type) ?type.length === 0? 'SinTipo' : type[0].name : type}`} >
            <div className="fondo">
                <img src={`${img}`} alt="" className="pokemon_img" />
            </div>
            <div className="pokemon_contenido">
                <h3 key={id} className="pokemon_nombre" >{name}</h3>
                <div className="caracteristicas">
                    <div className="ataque">
                        <h3>Ataque:</h3><span>{atack}</span>
                        
                    </div>
                    <div className="vida">
                        <h3>Vida:</h3><span>{hp}</span>
                    </div>
                </div>
                <div>
                    <h3 className="tipos-titulo">Tipos:</h3>
                    <div className="tipos">
                        {Array.isArray(type) ?
                            type.length === 0 ?
                                <h4>Sin Tipo</h4>
                                :
                            type.map(tipo => (
                                <h4 className="pokemon_tipo">{tipo.name}</h4>
                            ))
                            :   <h4>Sin Tipo</h4>
                        }
                    </div>
                </div>
                
            </div>
        
        </div>



    )
}