import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

import Player from "./Player";
import Ganador from "./Ganador";

function App() {
  const [name, setName] = useState([]); //nombres axios
  const [data, setData] = useState([]); //[{pista, j1, j2, res}]
  // const [playerId, setPlayerId] = useState([1,2,3,4,6,7,8,9,10]);
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

    // data[0]={"pista": 3, "j1": 5, "j2": 6, "res": 1};
    
    for(var i=0; i<5; i++)
    {
      setNum1(randomNumberInRange(1, 10));
      setNum2(randomNumberInRange(1, 10));
      data[i]={"pista": i, "j1": num1, "j2": num2, "res": 1};
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
      <table className="table">
        <thead>
          <tr>
            <th>Pista</th>
            <th>Jugador 1</th>
            <th>Jugador 2</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <Ganador data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
