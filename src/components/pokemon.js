import { nanoid } from "nanoid";

function Pokemon({ pokemon }) {
  return (
    <div className="flex text-center sm:text-left flex-col space-y-6 items-center sm:flex-row sm:items-center sm:space-x-16 sm:justify-center">
      <div className="border-2 border-green-600 rounded-full">
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      </div>
      <div>
        <p className="capitalize text-blue-300">
          <span className="text-green-600 font-bold ">Name:</span>{" "}
          {pokemon.name}
        </p>
        <div className="flex capitalize">
          <p className="mr-2">
            <span className="text-green-600 font-bold">Habilities: </span>{" "}
          </p>
          <div className="flex space-x-2 text-blue-300">
            {pokemon.abilities.map((ability) => (
              <p key={nanoid()}>{ability.ability.name}</p>
            ))}
          </div>
        </div>
        <p className="text-blue-300">
          <span className="text-green-600 font-bold">Height:</span>{" "}
          {pokemon.height / 10} m
        </p>
        <p className="text-blue-300">
          <span className="text-green-600 font-bold">Weight:</span>{" "}
          {pokemon.weight / 10} Kg
        </p>
      </div>
      <div className="uppercase text-green-600 font-bold flex space-x-2 animate-bounce">
        {pokemon.types.map((type) => (
          <p
            className="border-2 border-blue-300 rounded-full p-2"
            key={nanoid()}
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
