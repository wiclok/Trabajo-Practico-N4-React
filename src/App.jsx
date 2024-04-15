import { PokemonsList } from "./components/PokemonsList.jsx";
import "./assets/style/app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="title">
          <h1>PokemonsList:</h1>
        </div>
        <PokemonsList />
      </div>
    </>
  );
}

export default App;
