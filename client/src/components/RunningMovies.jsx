import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RunningMovies.css"; // Import your CSS file

const RunningMovies = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/genre-pages", { state: { genre: props.genre } });
  };

  return (
    <section id="running-movies" className="running-movies">
      <h2 className="section-title">{props.genre}</h2>
      <div id="movies-container" className="movies-container">
        {props.movies.length === 0 ? (
          <div className="dots-1"></div>
        ) : (
          props.movies.slice(0, 5).map((movie) => (
            <div key={movie.imdbId} className="movie-card">
              <img
                className="movie-img"
                src={movie.posterURL}
                alt="movie"
              />
              <div className="movie-title">{movie.title}</div>
            </div>
          ))
        )}
      </div>
      <button onClick={handleClick} className="view-all-button">
        View All
      </button>
    </section>
  );
};

export default RunningMovies;