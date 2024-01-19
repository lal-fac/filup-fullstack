import "./App.css";
import Holder from "./components/Holder";
import PokemonState from "./context/PokemonState";

function App() {
  return (
    <PokemonState>
      <Holder />
    </PokemonState>
  );
}

export default App;
