import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

import Player from "./Player";
import Ganador from "./Ganador";

function App() {
  const [name, setName] = useState([]);
  const [data, setData] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setName(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 10));
  };

  const getGanador = async () => {
    try {
      let n1 = {};
    } catch (err) {
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
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Sortear
          </button>
        </div>
        <div className="p-2">
          <button type="button" className="btn btn-primary">
            Reiniciar
          </button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Sorteo</th>
            <th>Jugador 1</th>
            <th>Jugador2</th>
          </tr>
        </thead>
        <tbody>
          {name.map((player) => (
            <Ganador player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
