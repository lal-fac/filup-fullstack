import { useContext, useEffect, useState } from "react";
import PokemonTag from "./PokemonTag";
import { PokemonContext } from "../context/PokemonContext";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

export default function PokemonStack() {
  const context = useContext(PokemonContext);
  const { pokemon, getPokemon } = context;

  const [localState, setLocalState] = useState({
    pagination: {
      total_records: 1302,
      current_page: 1,
      limit: 1302
    },
    search: ""
  });

  const page = localState.pagination.current_page || 1;
  const limit = localState.pagination.limit || 1302;
  const search = localState.search || "";

  useEffect(() => {
    const getResponse = async () => {
      await getPokemon(page, limit, search);
      return;
    };
    console.log(localState);
    getResponse();
  }, [localState, setLocalState]);

  return (
    <>
      <SearchBar setLocalState={setLocalState} localState={localState} />
      <Pagination
        setLocalState={setLocalState}
        localState={localState}
        page={page}
      />
      <h1>Pokemon stack</h1>
      {pokemon.map((element) => {
        return PokemonTag(element.name);
      })}
    </>
  );
}
