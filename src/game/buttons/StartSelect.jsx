import React from "react";
import "../styles.css"; // Asegúrate de tener el archivo de estilos en tu proyecto

const StartSelect = () => {
  return (
    <div className="start-select-container">
      {/* Botones Start y Select */}
      <div className="start-select-buttons">
        <button className="start-select-btn">Start</button>
        <button className="start-select-btn">Select</button>
      </div>
    </div>
  );
};

export default StartSelect;
