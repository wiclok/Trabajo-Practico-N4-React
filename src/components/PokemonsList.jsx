// PokemonsList.js
import React, { useState } from "react";
import { fetchPokemonsData } from "../api/fetchPokemonsData.js";
import { handleDeletePokemon } from "../Handlers/handleDeletePokemon.js";
import "../assets/style/PokemonsList.css";

export const PokemonsList = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  const fetchData = async () => {
    const pokemonsData = await fetchPokemonsData();
    setPokemonsList(pokemonsData);
  };

  return (
    <>
      <div className="seccionLista">
        <button className="btn btn-success p-2 m-5" onClick={fetchData}>
          Mostrar Lista
        </button>

        <div className="lista">
        <ul>
          {pokemonsList.map((pokemon, index) => (
            <li key={index}>
              <div className="d-flex mb-3">
              <h2>{pokemon.name}</h2>
              <button
                className="btn btn-danger ms-5"
                onClick={() =>
                  handleDeletePokemon(pokemonsList, setPokemonsList, index)
                }
              >
                Eliminar Pokemon
              </button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};
