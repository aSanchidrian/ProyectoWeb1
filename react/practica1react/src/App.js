import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Player from "./Player";
import Ganador from "./Ganador";

function App() {
  const [name, setName] = useState([]); //nombres axios
  const [winner, setWinner] = useState([]); //[{pista, j1, j2, res}]
  const [nums, setNums] = useState([]);
  // const [exito, setExito] = useState(0);

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

    handleReset();

    for(let i=0; i<5; i++)
    {
      let num1=0
      let num2=0
      let numRes=0

      num1 = i+1;
      num2 = randomNumberInRange(6, 10);
      numRes = randomNumberInRange(1, 2);

      for(let i=0; i<5; i++)
      {
        console.log(nums);
      }

      while(nums.includes(num2))
      {
        num2 = randomNumberInRange(6, 10);
        setNums([num2])
      }

      setWinner((winner)=>{
        return [...winner, {pista: i, j1: num1, j2: num2, res: numRes}];
      });

      setNums([num2])
    }
  };

  const handleReset = () => {
    setWinner([]);
  }

  useEffect(() => {
    sendGetRequest();
    // setNums([1,2,3,4,5,6,7,8,9,10])
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {name.map((player, i) => (
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
          <button type="button" className="btn btn-primary" onClick={handleReset}>
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
        {winner.map((rounds) => (
          <Ganador round={rounds} />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
