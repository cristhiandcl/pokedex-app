import "./App.css";
import { useState, useEffect, useRef } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import Pokemon from "./components/pokemon";
import DownloadStats from "./components/downloadStats";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isNewPokemon, setIsNewPokemon] = useState(false);
  const ref = useRef();

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: `${
        pokemon.length !== 0
          ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          : "Pikachu"
      } stats`,
    },
    axisX: {
      reversed: true,
    },
    axisY: {
      title: "Stats Value",
      includeZero: true,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          {
            y: pokemon.length !== 0 && pokemon.stats[0].base_stat,
            label: "Hp",
          },
          {
            y: pokemon.length !== 0 && pokemon.stats[1].base_stat,
            label: "Attack",
          },
          {
            y: pokemon.length !== 0 && pokemon.stats[2].base_stat,
            label: "Defense",
          },
          {
            y: pokemon.length !== 0 && pokemon.stats[3].base_stat,
            label: "Special-Attack",
          },
          {
            y: pokemon.length !== 0 && pokemon.stats[4].base_stat,
            label: "Special-Defense",
          },
          {
            y: pokemon.length !== 0 && pokemon.stats[5].base_stat,
            label: "Speed",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        isNewPokemon ? pokemonName : "pikachu"
      }`
    )
      .then((Response) => Response.json())
      .then((pokemon) => setPokemon(pokemon));
  }, [isDone]);

  const handleChange = (event) => {
    event.target.name === "pokemonName" && setPokemonName(event.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setIsDone(!isDone);
    setIsNewPokemon(true);
  };

  const isInvalid = pokemonName === "";

  return (
    <div className="bg-no-repeat bg-[url(https://images6.fanpop.com/image/photos/36300000/Types-Favorites-Hates-more-POKEMANZ-D-image-types-favorites-hates-and-more-pokemanz-d-36368900-1600-900.jpg)]">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-16 space-y-4 items-center">
        <form onSubmit={handleSend}>
          <div className="flex flex-col border-b-2 pb-2 justify-center items-center space-y-2">
            <p className="text-center text-green-600 uppercase font-bold text-3xl">
              Pokedex
            </p>
            <input
              className="text-xs rounded text-center w-fit"
              aria-label="Enter Pokemon name"
              type="text"
              placeholder="Pokemon Name"
              value={pokemonName}
              onChange={handleChange}
              name="pokemonName"
            />
            <button
              className={`border-none rounded-md px-2 bg-green-900 text-white text-[1.2em] ${
                isInvalid && "cursor-not-allowed opacity-50"
              }`}
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <p className="max-w-sm animate-pulse font-bold text-green-600 text-center border-2 border-blue-300 rounded-full p-2">
          Here you can fin some basic information and stats about any pokemon,
          so fell free to use this as your own{" "}
          <span className="text-blue-300 uppercase">pokedex</span>
        </p>
      </div>
      <div ref={ref}>
        {pokemon.length !== 0 && (
          <div className="mt-8">
            <Pokemon pokemon={pokemon} />
          </div>
        )}
        <div className="max-w-2xl mx-auto mt-8 mb-4">
          <CanvasJSChart options={options} />
        </div>
      </div>
      <DownloadStats refs={ref} pokemon={pokemon} />
    </div>
  );
}

export default App;
