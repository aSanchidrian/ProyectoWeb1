import React from "react";

const ganador = ({ data }) => {

  // data[0]={"pista": 3, "j1": 5, "j2": 6, "res": 1};

  return (
    <tr className="table-info">
      <th scope="row">{data.pista}</th>
      <td>{data.j1}</td>
      <td>{data.j2}</td>
      <td>{data.res}</td>
    </tr>
  );
};

export default ganador;
