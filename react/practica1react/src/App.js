import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import Player from "./Player";
import Ganador from "./Ganador";

function App() {
  const [name, setName] = useState([]); //nombres axios
  const [match, setMatch] = useState([]);

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

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    handleReset();

    let nums = [...name];

    nums = nums.sort(function () {
      return Math.random() - 0.5;
    });

    for (let i = 0; i < nums.length; i += 2) {
      setMatch((current) => [
        ...current,
        { pista: i, j1: nums[i].id, j2: nums[i + 1].id, res: 0 },
      ]);
    }
  };

  const getWinners = () => {
    const matches = match.map(function (game) {
      let numRes = randomNumberInRange(1, 2);

      return {
        pista: game.pista,
        j1: game.j1,
        j2: game.j2,
        res: numRes,
      };
    });

    setMatch(matches);
  };

  const handleReset = () => {
    setMatch([]);
  };

  useEffect(() => {
    sendGetRequest();
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={getWinners}
          >
            Ver ganadores
          </button>
        </div>
        <div className="p-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleReset}
          >
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
          {match.map((rounds) => (
            <Ganador round={rounds} />
          ))}
        </tbody>
      </table>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
