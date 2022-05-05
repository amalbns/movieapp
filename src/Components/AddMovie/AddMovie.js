import React, { useState } from 'react'
import { Button, Modal,Form} from 'react-bootstrap'

const AddMovie = (add) => {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [rate, setRate] = useState("")
const [posterUrl, setPosterUrl] = useState("")

const handleTitle = (e) => {
    setTitle(e.target.value)
}
const handleDescription = (e) => {
    setDescription(e.target.value)
}
const handleRate= (e) => {
    setRate(e.target.value)
}
const handlePoster = (e) => {
    setPosterUrl(e.target.value)
}

const handleMovie = (e) => {
    let newMovie ={title,description,rate,posterUrl}
    add(newMovie)
}


return (
    <div>
    <Button variant="primary" onClick={handleShow}>
        Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={handleTitle}/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" value={description}  onChange={handleDescription}/>
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter Rate" value={rate}  onChange={handleRate}/>
        <Form.Label>posterUrl</Form.Label>
        <Form.Control type="url" placeholder="Enter PosterUrl" value={posterUrl}  onChange={handlePoster}/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={() => handleMovie ()}>
            Save Changes
        </Button>
        </Modal.Footer>
        </Modal>
    </div>
)
}

export default AddMovie