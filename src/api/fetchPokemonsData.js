import axios from 'axios';

export const fetchPokemonsData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};