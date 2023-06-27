import React from "react";
import TvShowTopRated from "./TvTopRated";
import TvShowAiringToday from "./TvAirToday";
import TvShowLatest from "./TvLatest";

const TvShow = () => {

    return (
        <>
            <TvShowAiringToday />
            <TvShowLatest />
            <TvShowTopRated />
           
        </>
    );
}
 
export default TvShow;