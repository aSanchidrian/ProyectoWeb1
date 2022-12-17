import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Player from "./Player";
import Ganador from "./Ganador";
import Card from "./Card";

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
        {match.map((winner) => (
            <Card winner={winner} />
          ))}
        </Carousel>
    </div>
  );
}

export default App;

{/* <div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block w-100" data-src="holder.js/900x300?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [900x300]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185215c3962%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185215c3962%22%3E%3Crect%20width%3D%22900%22%20height%3D%22300%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22308.3000030517578%22%20y%3D%22170.4%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div className="carousel-caption d-none d-md-block">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" data-src="holder.js/900x300?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [900x300]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185215c3965%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185215c3965%22%3E%3Crect%20width%3D%22900%22%20height%3D%22300%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22264.9583282470703%22%20y%3D%22170.4%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div className="carousel-caption d-none d-md-block">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div> */}
