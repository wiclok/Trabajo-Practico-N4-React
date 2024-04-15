export const handleDeletePokemon = (pokemonsList, setPokemonsList, pokemonIndex) => {
  const updatedList = pokemonsList.filter((_, index) => index !== pokemonIndex);
  setPokemonsList(updatedList);
};