const axios = require("axios");

async function getPokemon() {
  let pokemon = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=1302`
  );
  pokemon = pokemon.data.results.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return pokemon;
}

module.exports = { getPokemon };
