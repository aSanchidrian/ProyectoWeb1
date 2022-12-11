import React from "react";

const players = ({ player }) => {
  return (
    <tr>
      <th scope="row">{player.id}</th>
      <td>{player.name}</td>
      <td>
        <button
          class="btn btn-primary"
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
            <span>{player.address.street}</span>
            <a>{player.address.suite}</a>
            <a>{player.address.city}</a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default players;