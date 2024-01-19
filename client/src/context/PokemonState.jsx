import { useReducer } from "react";
import PokemonReducer from "./PokemonReducer";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

export default function PokemonState(props) {
  const initialState = {
    pokemon: []
  };

  const [globalState, dispatch] = useReducer(PokemonReducer, initialState);

  const getPokemon = async (page, limit, search) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/pokemon?limit=${limit}&page=${page}&search=${search}`
      );
      dispatch({
        type: "getPokemon",
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon: globalState.pokemon,
        pagination: globalState.pagination,
        getPokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}
