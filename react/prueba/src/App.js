import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

//41e1f3e6 api key

const API_URL = "http://www.omdbapi.com?apikey=41e1f3e6";

const App = () => {
  const [movies, setMovies] = useState([]); //los corchetes dentro para declarar un array vacio
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    // fetch(`${API_URL}&s=${title}`)
    //   .then((response) => response.json())
    //   .then((data) => setMovies(data.Search));

    const response = await fetch(`${API_URL}&s=${title}`); //llamada a la api. No poner espacios entre nada.
    const data = await response.json();

    setMovies(data.Search);
  };

  //   useEffect(() => {
  //     searchMovies("");
  //   }, []);

  return (
    <div className="app">
      <h1>PELICULAS</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          //   value={searchTerm}
          onChange={(e) => {
            // setSearchTerm(e.target.value);
            searchMovies(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
