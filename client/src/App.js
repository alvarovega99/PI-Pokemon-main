import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/home';
import CrearPokemon from './components/crearPokemon/CrearPokemon';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';
import Prueba from './components/crearPokemon/puebaSelect';
function App() {


  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/Home" component={Home} />
      <Route path="/Create" component={CrearPokemon} />
      <Route path="/Detail/:id" component={PokemonDetail} />
      <Route path="/prueba" component={Prueba} />
    </div>
  );
}

export default App;
