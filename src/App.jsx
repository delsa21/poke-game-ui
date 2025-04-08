import { useEffect, useState } from "react";
import "./App.css";
import "./game/styles.css";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad";
import Actions from "./game/buttons/Actions";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const BASE_URL = "https://pokeapi.co/api/v2";

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
        <Screen pokemones={pokemones} />
        <div className="container-btn">
          <Pad />
          <div
            style={{
              width: "60px",
              height: "60px",
              display: "flex",
              backgroundColor: "black",
            }}
          ></div>
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default App;
