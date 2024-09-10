import '../css/pokedex.css';
import '../index.css';
import Stats from './Stats';

function PokedexInfo({pokemonData, pokemon}){
    return(
        <div className="pokedex-container">
            <div className="pokedex">
                <div className="infoBox">
                    <div className="infoPkmn">
                        <div className="header">
                            <div className="square"></div>
                            <span className="verde">&#11044; </span><span className="amarillo"> &#11044;</span>
                        </div>
                        <div className="info">
                            <h1>#{pokemonData.id} {pokemonData.name}</h1>
                            <img src={pokemonData.sprites.front_default} alt={`${pokemon}`}/>
                            {pokemonData.types.map((type) => (
                            <p key={type.slot} className="tipo">{type.type.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className="box2">
                    <div className="antropometria">
                        <p>Altura: {pokemonData.height}</p>
                        <p>Peso: {pokemonData.weight}</p>
                    </div>
                    
                    <Stats pokemonData={pokemonData} />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokedexInfo;