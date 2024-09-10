import '../css/stats.css';
import '../index.css';

function Stats({pokemonData}){
    return(
    <div className="stats">
        {pokemonData.stats.map((stat) => (
        <div key={stat.stat.name} className="contenedor-stat">
            <p>{stat.stat.name}:</p>
            <progress value={stat.base_stat} max={255}>{stat.base_stat}</progress>
        </div>
        ))}
    </div>
    )
}

export default Stats;
