import React from "react";
import PokemonStack from "./PokemonStack";

export default function Holder() {
  const print = () => window.print();

  return (
    <>
      <button className="printButton" onClick={print}>
        Print screen
      </button>
      <PokemonStack />
    </>
  );
}
