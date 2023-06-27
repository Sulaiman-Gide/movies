import React from 'react';
import {useEffect, useState} from "react";
import './App.css';
import Cards from './TvShowCards';
import MoviesTrending from './MoviesTrending';

const URL="https://api.themoviedb.org/3/trending/tv/day?api_key=ee94dbeaf7accfa25f1a8ba5568400fa";

const People = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res)=>{
        if(!res.ok) {
          throw Error('Server Error: Movies Not Found');
        }
        return res.json()
      })
      .then(data=>{
        setError(null);
        setMovies(data.results);
        setIsLoading(false);
        console.log(data)
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  },[])

    return (
      <div className="Trending--page">
       {error && <div className="Result--error--div"><h2 className="Result-error">{error}</h2></div>}
       {isLoading && <div className="Loading--div"><h2 className="Loading">Loading...</h2></div>}
       {movies.length > 0 && <div className="Trending--div start" >
          <span>
            <h1 className="Top--Rated--heading">Trending:<span> Tv Shows</span></h1>
          </span>
        </div>}
        {movies.length > 0 &&
          <div className="Parent--Cards--div">
            {movies.map((movieReq)=><Cards key={movieReq.id} {...movieReq} />)}
          </div>}
          <MoviesTrending />
      </div>
    );
}
 
export default People;