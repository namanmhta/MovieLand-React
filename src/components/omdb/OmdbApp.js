import MovieCard from "./MovieCard";
import "./Omdb.css";
import React, { useEffect, useState } from "react";

//e6eb57a7
const API_URL = "http://www.omdbapi.com?apikey=e6eb57a7";

function OmdbApp() {
  const searchMovies = async (title) => {
    const response = await fetch(API_URL + "&s=" + title);

    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const [movies, setMovies] = useState([]);

  // const movies = [
  //   {
  //     Title: "Batman Begins",
  //     Year: "2005",
  //     imdbID: "tt0372784",
  //     Type: "movie",
  //     Poster: "N/A",
  //   },

  //   {
  //     Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  //     Year: "2016",
  //     imdbID: "tt18689424",
  //     Type: "movie",
  //     Poster: "N/A",
  //   },
  // ];

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="container">
        {movies.map((m) => (
          <MovieCard movie={m} />
        ))}
      </div>
    </div>
  );
} //eo function OmdbApp

export default OmdbApp;
