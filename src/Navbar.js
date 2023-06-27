import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CardSearch from './CardSearch';
import topLeftImg from './images/photo-11.jpg';
import topRightImg from './images/photo-18.jpg';
import { useNavigate } from "react-router-dom";


function NavbarBody({ name, ...props }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  
  
    const searchMovie = async(e)=> {
        e.preventDefault();
        console.log("searching");
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=ee94dbeaf7accfa25f1a8ba5568400fa&query=${query}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setMovies(data.results)
        }
        catch(e){
            console.log(e);
        }
    }
    const changeHandler=(e)=> {
        setQuery(e.target.value);
    }

    let navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark" className="Navigation p-0">
        <Container fluid="xxl" >
          <Navbar.Brand href="#home" className="Logo--text">STARNET</Navbar.Brand>
          <Navbar.Toggle  onClick={handleShow} />
          <Navbar.Collapse className="Responsive--Nav">
            <Nav className="mx-auto">
                <Link to="/" className="Nav--links">Home</Link>
                <Link to="/movies" className="Nav--links">Movies</Link>
                <Link to="/tvshow" className="Nav--links">Tv Shows</Link>
                <Link to="/trending" className="Nav--links">Trending</Link>
            </Nav>
            <Nav className="Nav--span">
              <Form className=" d-flex me-2" onSubmit={searchMovie}>
                    <Form.Control type="search" 
                    placeholder="Search Movies..." 
                    className="Search--bar "
                    aria-label="search"
                    name="query"
                    value={query} onChange={changeHandler} />
                    <button className="Submit--btn" type="submit">Search</button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Offcanvas show={show} onHide={handleClose} {...props} className="Offcanvas--section">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="Offcanvas--title">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="Offcanvas--body">
            <Form className="d-flex" onSubmit={searchMovie}>
              <Form.Control type="search" 
                    placeholder="Search Movies..." 
                    aria-label="search"
                    name="query"
                    value={query} onChange={changeHandler}
                    />
              <Button type="submit" variant="outline-success" onClick={handleClose} >Search</Button>
            </Form>
            <Link to="/" onClick={handleClose} className="Nav--links">Home</Link>
            <Link to="/movies" onClick={handleClose} className="Nav--links">Movies</Link>
            <Link to="/tvshow" onClick={handleClose} className="Nav--links">Tv Shows</Link>
            <Link to="/trending" onClick={handleClose} className="Nav--links">Trending</Link>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
      {query.length > 0 && <div className="Search--div">
          <div className="Result--div" ><h1 className="Result" >Search Result For <b>{query}</b>:</h1></div>
          <div className="Parent--SearchCards--div">
            {movies.map((movieReq)=><CardSearch key={movieReq.id} {...movieReq} />)}
          </div> 
      </div>}
      {query.length < 1 && <section className="Top--section">
        <div className="Top--body">
            <img src={topLeftImg} alt="" className="Top--Left--img" />
            <img src={topRightImg} alt="" className="Top--Right--img" />
        </div>
        <div className="Top--left--Text animate__animated animate__backInRight animate__delay-1s">
            <h3>Unlimited HD <span> Movies</span>,<br></br>TV Shows, Episodes, & More.</h3>
            <button onClick={() => {navigate("/trending")}} className="Explore--btn">Explore Now</button>
        </div>
        </section>}
    </>
    
  );
}

export default NavbarBody;