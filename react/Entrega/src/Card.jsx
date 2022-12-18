import React from "react";
import Carousel from "react-bootstrap/Carousel";

const card = ({ winner }) => {
  return (
    <div>
      <h3>EN LA PISTA {winner.pista}</h3>
      <p>HA GANADO EL JUGADOR: {winner.res}</p>
    </div>
  );
};

export default card;
