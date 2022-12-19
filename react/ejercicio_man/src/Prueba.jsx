import React from "react";

import Prueba from "./Prueba";

const prueba = (props) => {
  return (
    <div>
      <h3>{props.info.name}</h3>
      <p>{props.info.description}</p>
    </div>
  );
};

export default prueba;
