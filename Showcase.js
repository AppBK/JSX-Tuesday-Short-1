const bulbasaurImg = "./images/bulbasaur.jpg";
import './Showcase.css'

function Showcase() {
  let favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaurImg} alt="Bulbasaur" />
      <h2>
        Bulbasaur's type is <span className="span1">{pokeCharacteristics.type}</span> and one of their moves is{" "}
        <span className="span2">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
