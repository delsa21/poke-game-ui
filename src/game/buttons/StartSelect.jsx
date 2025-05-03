import React from "react";
import "../styles.css"; // Asegúrate de tener el archivo de estilos en tu proyecto


const StartSelect = ({ handleSelectPokemon }) => {
  return (
    <div style={{ paddingTop: '5%', display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }}>
      <div className="container-start-select">
        <div className="container-btn-select">
          <button
            className="start-select-btn"
            onClick={() => handleSelectPokemon()}
          ></button> <p>Select</p>
        </div>
        <div className="container-btn-start">
          <button className="start-select-btn"></button> <p>Start</p>
        </div>
      </div>
    </div>
  );
};

export default StartSelect;