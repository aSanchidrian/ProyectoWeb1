import React from "react";

const players = ({ player }) => {
  return (
    <tr>
      <th scope="row">{player.id}</th>
      <td>{player.name}</td>
      <td>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target={"#id" + player.id}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Info
        </button>
        <div className="collapse" id={"id" + player.id}>
          <div className="card card-body">
            <span>Address: {player.address.street}</span>
            <a>Suite: {player.address.suite}</a>
            <a>City: {player.address.city}</a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default players;
