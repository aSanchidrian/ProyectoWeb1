import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

import Player from "./Player";

function App() {
  const [name, setName] = useState([]);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setName(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div onClick={sendGetRequest}>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          {name.map((player) => (
            <Player player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
