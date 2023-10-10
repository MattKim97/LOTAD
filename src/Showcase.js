import "./Showcase.css";

function Showcase() {
  const favPokemon = "Lotad";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Splash"
  };
  const image =
    "https://static.pokemonpets.com/images/monsters-images-800-800/2270-Shiny-Lotad.webp";
  return (
    <div className="center">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: "300px", width: "300px", borderRadius: "50%" }}
        src={image}
        alt="Lotad"
      />
      <h2>
        Lotad's type is{" "}
        <span className="first">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="second">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
