import { useEffect, useState } from "react";
import axios from "axios";
import './index.css';
import SearchBar from "./components/SearchBar";
import PokedexInfo from "./components/PokedexInfo";

function App() {
  const [pokemon, setPokemon] = useState('');
  const [suggestedPokemon, setSuggestedPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (pokemon.length > 2) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
          const filteredSuggestions = response.data.results.filter(p =>
            p.name.toLowerCase().includes(pokemon.toLowerCase())
          );
          setSuggestedPokemon(filteredSuggestions);
        } catch (err) {
          console.error(`Error fetching pokemon data: ${err}`);
        }
      } else {
        setSuggestedPokemon([]);
      }
    };

    fetchSuggestions();
  }, [pokemon]);
  
  function handlePokemonName(e){
    setPokemon(e.target.value);
  }

  const fetchPokemonData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    
    try{
      const response = await axios.get(url);
      setPokemonData(response.data);
    }
    catch(err){
      console.error(`Error fetching pokemon data ${err}`);
    }
  };

  async function handleSuggestion(pokemonName){
    setPokemon(pokemonName);
    await fetchPokemonData(pokemonName);
    setSuggestedPokemon([]);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pokemon === ''){
      return pokemon
    }
    await fetchPokemonData(pokemon);
    setSuggestedPokemon([]);
    setPokemon('');
  }

  return (
    <div className="app-container">
      <SearchBar suggestedPokemon={suggestedPokemon} onHandlePokemonName={handlePokemonName} onHandleSuggestion={handleSuggestion} onHandleSubmit={handleSubmit} pokemon={pokemon}/>
      
      {pokemonData && <PokedexInfo pokemonData={pokemonData} pokemon={pokemon} />}
    </div>
  );
}

export default App;