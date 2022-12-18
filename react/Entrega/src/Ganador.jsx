import React from "react";

const ganador = ({ round }) => {

  return (
    <tr className="table-info">
      <th scope="row">{round.pista}</th>
      <td>{round.j1}</td>
      <td>{round.j2}</td>
      <td>{round.res}</td>
    </tr>
  );
};

export default ganador;
