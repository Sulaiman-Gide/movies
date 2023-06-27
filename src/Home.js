import React from 'react';
import {useEffect, useState} from "react";
import './App.css';
import Cards from './Cards';
import AllTrending from './AllTrending';
import { useNavigate } from "react-router-dom";

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=ee94dbeaf7accfa25f1a8ba5568400fa";

const MainBody = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
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
        console.log(data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  },[])

  let navigate = useNavigate();

    return ( 
      <div className="Home--body--div">
       {error && <div className="Result--error--div"><h2 className="Result-error">{error}</h2></div>}
       {isLoading && <div className="Loading--div"><h2 className="Loading">Loading...</h2></div>}
       {movies.length > 0 && <div className="Most--watched--div" >
          <span>
            <p className="Coloured--heading"> Online streaming</p>
            <h1 className="Most--watched--heading"> Most Watched Movies</h1>
          </span>
          <span>
            <button className="Btn--most--watched Btn--active">Movies</button>
            <button onClick={() => {navigate("/moviesupcoming")}} className="Btn--most--watched">Upcoming Movies</button>
            <button onClick={() => {navigate("/tvshow")}}  className="Btn--most--watched">TV Shows</button>
          </span>
        </div>}
        {movies.length > 0 &&
          <div className="Parent--Cards--div">
            {movies.map((movieReq)=><Cards key={movieReq.id} {...movieReq} />)}
          </div>}
        <AllTrending />
      </div>

    );
}
 
export default MainBody;