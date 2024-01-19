import "./App.css";
import PokemonStack from "./components/PokemonStack";
import PokemonState from "./context/PokemonState";

function App() {
  return (
    <PokemonState>
      <PokemonStack />
    </PokemonState>
  );
}

export default App;
