import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import RunningMovies from "./RunningMovies";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [classicMovies, setClassicMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [mysteryMovies, setMysteryMovies] = useState([]);
  const [westernMovies, setWesternMovies] = useState([]);
  

  const fetchAnimationMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/animation`);
    const jsonResponse = await response.json();
    await setAnimationMovies(jsonResponse);
  };
  
  const fetchClassicMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/classic`);
    const jsonResponse = await response.json();
    await setClassicMovies(jsonResponse);
  };

const fetchComedyMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/comedy`);
    const jsonResponse = await response.json();
    await setComedyMovies(jsonResponse);
  };

const fetchDramaMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/drama`);
    const jsonResponse = await response.json();
    await setDramaMovies(jsonResponse);
  };

const fetchHorrorMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/horror`);
    const jsonResponse = await response.json();
    await setHorrorMovies(jsonResponse);
  };

const fetchFamilyMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/family`);
    const jsonResponse = await response.json();
    await setFamilyMovies(jsonResponse);
  };

const fetchMysteryMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/mystery`);
    const jsonResponse = await response.json();
    await setMysteryMovies(jsonResponse);
  };

const fetchWesternMovies = async () => {
    const response = await fetch(`https://api.sampleapis.com/movies/western`);
    const jsonResponse = await response.json();
    await setWesternMovies(jsonResponse);
  };

  useEffect(() => {
    // props.fetchAllMovies();
    fetchAnimationMovies();
    fetchClassicMovies();
    fetchComedyMovies();
    fetchDramaMovies();
    fetchHorrorMovies();
    fetchFamilyMovies();
    fetchMysteryMovies();
    fetchWesternMovies();
  }, []);
  
  return (
    <main id="home">
      <h1 id="home-title">book tickets for your favourite movies online</h1>
      <Link to="bookingdashboard" id="ticket-link">
        Book Now !
      </Link>
      <RunningMovies
        movies={animationMovies}
        genre="Animation"
      />
      <RunningMovies
        movies={classicMovies}
        genre="Classic"
      />
      <RunningMovies
        movies={comedyMovies}
        genre="Comedy"
      />
      <RunningMovies
        movies={dramaMovies}
        genre="Drama"
      />
      <RunningMovies
        movies={horrorMovies}
        genre="Horror"
      />
      <RunningMovies
        movies={familyMovies}
        genre="Family"
      />
      <RunningMovies
        movies={mysteryMovies}
        genre="Mystery"
      /> 
      <RunningMovies
        movies={westernMovies}
        genre="Western"
      />
      <Footer />
    </main>
  );
};

export default Home;
