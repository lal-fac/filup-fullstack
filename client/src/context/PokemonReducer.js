const PokemonReducer = (globalState, action) => {
  switch (action.type) {
    case "getPokemon":
      return {
        ...globalState,
        pokemon: action.payload.results,
        pagination: action.payload.pagination
      };
    default:
      break;
  }
};

export default PokemonReducer;
