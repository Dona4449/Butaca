import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./GenrePages.css";

export default function GenrePages() {
  const location = useLocation();
  const genre = location.state.genre;
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.sampleapis.com/movies/${genre.toLowerCase()}`
      );
      const data = await response.json();
      await setMovies(data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="genrePagesContainer">
      <div className="gp-title">
        <h1>{genre}</h1>
      </div>

      <div id="movies-container">
        {movies.length === 0 ? (
          <div className="dots-1"></div>
        ) : (
          movies.map((movie) => {
            return (
              <div key={movie.imdbId} className="movie-card">
                <img className="movie-img" src={movie.posterURL} alt="movie" />
                <div className="movie-title">{movie.title}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
