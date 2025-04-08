import React from "react";
import "../styles.css"; 

const Pad = () => {
  const handlePress = (direction) => {
    console.log(`Button pressed: ${direction}`);
  };

  return (
    <div className="pad-container">
      <button className="pad-btn up" onClick={() => handlePress("up")}>
        ↑
      </button>
      <button className="pad-btn down" onClick={() => handlePress("down")}>
        ↓
      </button>
      <button className="pad-btn left" onClick={() => handlePress("left")}>
        ←
      </button>
      <button className="pad-btn right" onClick={() => handlePress("right")}>
        →
      </button>
    </div>
  );
};

export default Pad;
