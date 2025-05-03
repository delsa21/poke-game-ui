import React from "react";
import "./styles.css"; 

const Screen = ({ pokemones, hoverPokemon, selectedPokemon }) => {
  console.log(selectedPokemon);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemon.length === 2 ? (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <img
                    src={selectedPokemon[0].sprites?.front_default}
                    alt="Tu Pokémon"
                    style={{ width: "80px" }}
                  />
                  <p style={{ fontSize: "14px", textAlign: "center" }}>
                    {selectedPokemon[0].name}
                  </p>
                </div>
                <div>
                  <img
                    src={selectedPokemon[1].sprites?.back_default}
                    alt="Oponente Pokémon"
                    style={{ width: "80px" }}
                  />
                  <p style={{ fontSize: "14px", textAlign: "center" }}>
                    {selectedPokemon[1].name}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Cuando NO has seleccionado todavía: muestra la lista con hover
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {pokemones?.map((pokemon, index) => (
                <div
                  key={pokemon.id}
                  style={{
                    backgroundColor: hoverPokemon === index ? "#00ddff" : "",
                    padding: "4px",
                    margin: "4px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={pokemon.sprites?.front_default}
                    alt={pokemon.name}
                    style={{ width: "80px" }}
                  />
                  <p style={{ fontSize: "12px", textAlign: "center" }}>{pokemon.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: "8px" }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
