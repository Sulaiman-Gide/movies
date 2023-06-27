import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

const API_IMG="https://image.tmdb.org/t/p/w500/";

const Cards = ({name, poster_path, first_air_date, overview, popularity}) => {
 
  const [show, setShow] = useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

    return (
        <>
            <div onClick={handleShow}>
                <div className="Cards" >
                    <img src={API_IMG+poster_path} 
                    alt="" 
                    className="Cards--img"></img>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="Modal--Cards">
                    <img src={API_IMG+poster_path} 
                    alt="" 
                    className="Modal--Cards--img"></img>
                    <div>
                        <h1 className="Modal--Cards--h1">Movie Tittle:<span> {name}</span></h1>
                        <h2 className="Modal--Cards--h2">First Air Date:<span> {first_air_date}</span></h2>
                        <h2 className="Modal--Cards--h2">Number Of Views:<span> {popularity}</span></h2>
                        <p className="Modal--Cards--text"><span>Overview:</span> {overview}</p>
                        <div className="Modal--Btn mt-4">
                            <Button variant="secondary" size="lg" onClick={handleClose} className="Btn--close">
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
      </>
    );
}
 
export default Cards;