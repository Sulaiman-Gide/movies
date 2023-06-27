import Navbar from './Navbar'
import Home from './Home';
import './App.css';
import TvShow from "./TvShow";
import Movies from "./Movies";
import MoviesUpcoming from './MoviesUpcoming';
import ErrorPage from "./ErrorPage";
import Trending from './Trending';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';


function App() {

  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/moviesupcoming" element={<MoviesUpcoming />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
