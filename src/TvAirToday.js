import React from 'react';
import {useEffect, useState} from "react";
import './App.css';
import Cards from './TvShowCards';


const URL="https://api.themoviedb.org/3/tv/airing_today?api_key=ee94dbeaf7accfa25f1a8ba5568400fa";

const AiringToday = () => {
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
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  },[])

    return (
        <div className="TvShow--page">
       {error && <div className="Result--error--div"><h2 className="Result-error">{error}</h2></div>}
       {isLoading && <div className="Loading--div"><h2 className="Loading">Loading...</h2></div>}
       {movies.length > 0 && <div className="Tv--Show--div start" >
          <span>
            <p className="Coloured--heading"> Online streaming:<span> Watch Live Now.</span></p>
            <h1 className="Tv--Show--heading">TV Shows:<span> Airing Today</span></h1>
          </span>
        </div>}
        {movies.length > 0 &&
          <div className="Parent--Cards--div">
            {movies.map((movieReq)=><Cards key={movieReq.id} {...movieReq} />)}
          </div>}
        </div>
    );
}
 
export default AiringToday;