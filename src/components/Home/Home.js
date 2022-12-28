import React, { useEffect } from 'react';
import MovieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
  useEffect(() => {
    const movieText = "Game";
    const Key = "276e00d0";
    const fetchMovies = async () => {
      const response = await MovieApi
      .get(`?apiKey=${Key}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("ERR :", err);
      });
      console.log("The movie response:", response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home