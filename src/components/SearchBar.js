import '../css/searchBar.css';
import '../index.css';

function SearchBar({suggestedPokemon, onHandleSubmit, onHandlePokemonName, onHandleSuggestion, pokemon}){
    return(
    <div className="search-container">
        <form onSubmit={onHandleSubmit}>
        <label><span className="verde">&#11044; </span> <span className="amarillo"> &#11044;</span></label>
        <input type='search' value={pokemon} placeholder="Nombre del pokemon" onChange={onHandlePokemonName} />
        <button type="submit">Search</button>
        </form>
        {pokemon.length > 2 && (
        <ul className={`suggestions ${suggestedPokemon.length === 0 ? 'hide' : ''}`}>
            {suggestedPokemon.map((suggestedPkmn) => (
            <li key={suggestedPkmn.name} onClick={() => onHandleSuggestion(suggestedPkmn.name)}>{suggestedPkmn.name}</li>
            ))}
        </ul>
        )}
    </div>
    )
}

export default SearchBar;