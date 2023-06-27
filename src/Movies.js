import React from "react";
import MoviesTrending from "./MoviesTrending";
import MoviesNowPlaying from "./MoviesNowPlaying";
import MoviesUpcoming from "./MoviesUpcoming";

const Movies = () => {

    return (
        <>
            <MoviesUpcoming />
            <MoviesNowPlaying />
            <MoviesTrending />
           
        </>
    );
}
 
export default Movies;