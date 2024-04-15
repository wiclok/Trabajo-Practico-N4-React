// PokemonsList.js
import React, { useState } from 'react';
import { fetchPokemonsData } from '../api/fetchPokemonsData.js';
import { handleDeletePokemon } from '../Handlers/handleDeletePokemon.js';

export const PokemonsList = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

    const fetchData = async () => {
      const pokemonsData = await fetchPokemonsData();
      setPokemonsList(pokemonsData);
    };

  return (
    <>
      <h1>PokemonsList:</h1>

      <button onClick={fetchData}>Mostrar Lista</button>

      <ul>
        {pokemonsList.map((pokemon, index) => (
          <li key={index}>
            <h2>{pokemon.name}</h2>
            <button onClick={() => handleDeletePokemon(pokemonsList, setPokemonsList, index)}>Eliminar Pokemon</button>
          </li>
        ))}
      </ul>
    </>
  );
};

