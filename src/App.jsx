import { useEffect, useState } from "react";
import "./App.css";
import "./game/styles.css";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad";
import Actions from "./game/buttons/Actions";
import StartSelect from "./game/buttons/StartSelect";


function App() {
  const [pokemones, setPokemones] = useState([]);
  const BASE_URL = "https://pokeapi.co/api/v2";
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [hp, setHp] = useState({ player: 100, enemy: 100 });

  

  const handlePress = (dir) => {
    if (dir === 'right') {
      setHoverPokemon((prev) => (prev + 1) % pokemones.length);
    }
    if (dir === 'left') {
      setHoverPokemon((prev) => (prev - 1 + pokemones.length) % pokemones.length);
    }
  };
  
  
const handleSelectPokemon = () => {
  const pokemonSelected = pokemones[hoverPokemon];
  const enemySelected = computerSelection();

  if (pokemonSelected && enemySelected) {
    setSelectedPokemon([pokemonSelected, enemySelected]);
  }
};
  
  const computerSelection = () => {
    const randomIndex = Math.floor(Math.random() * pokemones.length);
    return pokemones[randomIndex];
  };
  
  const handleAttack = () => {
    setHp((prev) => ({
      ...prev,
      enemy: Math.max(prev.enemy - 20, 0),
    }));
  };
  


  const getDetails = async (results) => {
    try {
      const res = await Promise.all(
        results.map((result) =>
          fetch(result.url).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        )
      );
      return res;
    } catch (error) {
      console.error("Failed to fetch pokemon details:", error);
      return [];
    }
  };

  const getPokemones = async () => {
    try {
      const res = await fetch(`${BASE_URL}/pokemon`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      const pokemonsDetails = await getDetails(data.results);
      setPokemones(pokemonsDetails);
    } catch (error) {
      console.error("Error fetching pokemones:", error);
    }
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "350px",
          height: "500px",
          border: "2px black solid",
          borderRadius: "5px 5px 35px 5px",
          backgroundColor: "#DEDEE1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} selectedPokemon={selectedPokemon}/>
        <div className="container-btn">
          <Pad handlePress={handlePress} />
          <div
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"
            }}
          ></div>
          <Actions />
        </div>
        <div>
         <StartSelect handleSelectPokemon={handleSelectPokemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
